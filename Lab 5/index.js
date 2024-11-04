// console.log("test");
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  doc,
} from "firebase/firestore";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

// the video shows 'Sign in with Google' but it is left out here (it is sufficient to get the email sign in working)
const uiConfig = {
  signInSuccessUrl: "index.html",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1rU-sEjrhiJqRNIbvgMC4YSfDip5aLzY",
  authDomain: "rwat-lab5-b0142.firebaseapp.com",
  projectId: "rwat-lab5-b0142",
  storageBucket: "rwat-lab5-b0142.appspot.com",
  messagingSenderId: "699981072229",
  appId: "1:699981072229:web:8609056dd678278495838c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const views = {
  CREATE_PERSON_VIEW: "create_person",
  LIST_PEOPLE_VIEW: "list_people",
};

const authDOMElement = document.querySelector(".firebase--auth--wrapper");
const createUserSectionDOMElement = document.querySelector(
  ".create--user--section"
);
const listPeopleSectionDOMElement = document.querySelector(
  ".list--people--section"
);

const createUserFormDOMElement = document.querySelector("#create--user--form");

const authBtnDOMElement = document.querySelector(".auth--btn");

const createPersonBtnDOMElement = document.querySelector(
  ".create--person--btn"
);
const listPeopleBtnDOMElement = document.querySelector(".list--people--btn");
const createPersonFormDOMElement = document.querySelector("form");

const prompt = (str) => {
  const promptDOMElement = document.querySelector(".prompt--message");
  promptDOMElement.textContent = str;
  promptDOMElement.display = "block";
};

const subscribeToUsersCollection = () => {
  const ref = collection(db, "users");

  const unsubscribe = onSnapshot(ref, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const { id, name } = change.doc.data();
      if (change.type === "added") {
        addUserToPeopleTable({ id, name, ref: change.doc.id });
      }
      if (change.type === "removed") {
        removeUserFromPeopleTable(change.doc.id);
      }
    });
  });

  return unsubscribe;
};

const addUserToPeopleTable = ({ name, id, ref }) => {
  const row = document.createElement("tr");
  const listUsersTableDomElement = document.querySelector(
    ".list--people--section tbody"
  );

  row.dataset.id = ref;
  listUsersTableDomElement.appendChild(row);

  row.innerHTML = `
  <td>${name}</td>
  <td>${id}</td>
  `;
};

const removeUserFromPeopleTable = (ref) => {
  const listUsersTableDomElement = document.querySelector(
    ".list--people--section tbody"
  );
  const row = listUsersTableDomElement.querySelector(`tr[data-id="${ref}"]`);
  row.remove();
};

const updateView = (view) => {
  if (current_view == view) return;

  if (current_view === views.CREATE_PERSON_VIEW) {
    createUserSectionDOMElement.style.display = "block";
    listPeopleSectionDOMElement.style.display = "none";
  } else if (current_view === views.LIST_PEOPLE_VIEW) {
    createUserSectionDOMElement.style.display = "none";
    listPeopleSectionDOMElement.style.display = "block";
  }
};

authBtnDOMElement.addEventListener("click", (e) => {
  if (auth.currentUser)
    return signOut(auth).then(() => {
      if (usersSubscription) usersSubscription();
    });
});

createPersonBtnDOMElement.addEventListener("click", (e) => {
  updateView(views.CREATE_PERSON_VIEW);
});
listPeopleBtnDOMElement.addEventListener("click", (e) => {
  updateView(views.LIST_PEOPLE_VIEW);
});

createPersonFormDOMElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInputDOMElement = e.target.querySelector("#name--input");
  const idInputDOMElement = e.target.querySelector("#id--input");

  const id = idInputDOMElement.value.trim();
  const name = nameInputDOMElement.value.trim();

  if (id.length == 0 || name.length == 0)
    return prompt("You must enter an input for id or name.");

  nameInputDOMElement.value = "";
  idInputDOMElement.value = "";
  createUserFormDOMElement.dataset.disabled = true;

  try {
    const ref = await addDoc(collection(db, "users"), {
      id: idInputDOMElement.value,
      name: nameInputDOMElement.value,
    });
    createUserFormDOMElement.dataset.disabled = false;
  } catch (e) {
    prompt(`An error has occurred (${e})`);
  }
});

let current_view;
updateView(views.CREATE_PERSON_VIEW);

let usersSubscription = undefined;
onAuthStateChanged(auth, (user) => {
  if (auth.currentUser) {
    // user logged in
    authDOMElement.innerHTML = "";
    usersSubscription = subscribeToUsersCollection();
    return;
  }

  document.querySelector(".container").style.display = "none";
  const ui =
    firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

  ui.start(authDOMElement, uiConfig);
});
