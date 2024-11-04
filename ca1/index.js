import { fromEvent } from "rxjs";
import { buffer, debounceTime, filter, map } from "rxjs/operators";

const keySequence = {
  add: "a",
  remove: "r",
  edit: " ",
  selectUp: "ArrowUp",
  selectDown: "ArrowDown",
  selectLeft: "ArrowLeft",
  selectRight: "ArrowRight",
  moveRight: ["ArrowLeft", "ArrowRight"],
  moveLeft: ["ArrowRight", "ArrowLeft"],
  moveDown: ["ArrowUp", "ArrowDown"],
  moveUp: ["ArrowDown", "ArrowUp"],
  rotateClockwise: ["ArrowLeft", "ArrowUp", "ArrowRight"],
  rotateAnticlockwise: ["ArrowRight", "ArrowUp", "ArrowLeft"],
};

let currentNotification = undefined;
let selectedElement = { row: 0, col: 0 };

const setKeybordMode = (bool) => {
  if (bool && !document.body.classList.contains("keyboard--mode"))
    document.body.classList.add("keyboard--mode");
  else if (!bool && document.body.classList.contains("keyboard--mode"))
    document.body.classList.remove("keyboard--mode");
};

const addRemoveObservable = fromEvent(document, "keydown").pipe(
  filter((e) => ["a", "r"].includes(e.key))
);

addRemoveObservable.subscribe((e) => {
  setKeybordMode(true);
  if (e.key === keySequence.add) addElement();
  if (e.key === keySequence.remove) removeElement();
});

const arrowKeyObservable = fromEvent(document, "keydown").pipe(
  filter((e) => Object.values(keySequence).includes(e.key)),
  buffer(fromEvent(document, "keyup").pipe(debounceTime(150))),
  map((keys) => keys.map((e) => e.key))
);

arrowKeyObservable.subscribe((keys) => {
  setKeybordMode(true);
  if (keys.length === 1) {
    handleSingleKey(keys[0]);
  } else if (keys.length === 2) {
    handleMove(keys);
  } else if (keys.length === 3) {
    handleRotate(keys);
  }
});

const handleSingleKey = (key) => {
  switch (key) {
    case keySequence.selectUp:
      selectElement(selectedElement.row - 1, selectedElement.col);
      break;
    case keySequence.selectDown:
      selectElement(selectedElement.row + 1, selectedElement.col);
      break;
    case keySequence.selectLeft:
      selectElement(selectedElement.row, selectedElement.col - 1);
      break;
    case keySequence.selectRight:
      selectElement(selectedElement.row, selectedElement.col + 1);
      break;
    case keySequence.edit:
      openElementEditor(selectedElement.row, selectedElement.col);
      break;
  }
};

const handleMove = (keys) => {
  if (arraysEqual(keys, keySequence.moveRight))
    moveElement(selectedElement.row, selectedElement.col, 0, 1);
  else if (arraysEqual(keys, keySequence.moveLeft))
    moveElement(selectedElement.row, selectedElement.col, 0, -1);
  else if (arraysEqual(keys, keySequence.moveDown))
    moveElement(selectedElement.row, selectedElement.col, 1, 0);
  else if (arraysEqual(keys, keySequence.moveUp))
    moveElement(selectedElement.row, selectedElement.col, -1, 0);
};

const handleRotate = (keys) => {
  if (arraysEqual(keys, keySequence.rotateClockwise))
    rotateElement(selectedElement.row, selectedElement.col, 90);
  else if (arraysEqual(keys, keySequence.rotateAnticlockwise))
    rotateElement(selectedElement.row, selectedElement.col, -90);
};

const addElement = () => {
  const { row, col } = findFirstFreeCell();
  if (row !== -1 && col !== -1) {
    GridMatrix.matrix.getGridInPos(row, col).addElement("box");
    selectElement(row, col);
  }
};

const removeElement = () => {
  const { row, col } = selectedElement;
  triggerDeleteOnElement(row, col);
};

const selectElement = (row, col) => {
  if (
    row >= 0 &&
    row < GridMatrix.matrix.n &&
    col >= 0 &&
    col < GridMatrix.matrix.m
  ) {
    selectedElement = { row, col };
    triggerOutlineOnElement(row, col);
  }
};

let lastOutlinedElement = undefined;
const triggerOutlineOnElement = (row, col) => {
  if (lastOutlinedElement)
    lastOutlinedElement.classList.remove("keyboard--outlined");

  const grid = GridMatrix.matrix.getGridInPos(row, col).grid;
  grid.classList.add("keyboard--outlined");
  lastOutlinedElement = grid;
};

const openElementEditor = (row, col) => {
  const element = GridMatrix.matrix.getElementInPos(row, col);
  if (element && element.type === "box") element.focus();
};

const moveElement = (row, col, rowOffset, colOffset) => {
  const targetRow = row + rowOffset;
  const targetCol = col + colOffset;
  if (
    targetRow >= 0 &&
    targetRow < GridMatrix.matrix.n &&
    targetCol >= 0 &&
    targetCol < GridMatrix.matrix.m
  ) {
    const source = GridMatrix.matrix.getGridInPos(row, col);
    const target = GridMatrix.matrix.getGridInPos(targetRow, targetCol);

    if (source && target) {
      let lastSourceElement = { ...source.element };
      let lastTargetElement = { ...target.element };

      if (lastSourceElement && lastSourceElement?.type !== -1)
        triggerDeleteOnElement(row, col);
      if (lastTargetElement && lastTargetElement?.type !== -1)
        triggerDeleteOnElement(targetRow, targetCol);

      if (lastSourceElement?.type !== -1)
        GridMatrix.matrix
          .getGridInPos(targetRow, targetCol)
          .addElement(
            lastSourceElement.type,
            lastSourceElement.rotation,
            lastSourceElement.value
          );

      if (lastTargetElement?.type !== -1)
        GridMatrix.matrix
          .getGridInPos(row, col)
          .addElement(
            lastTargetElement.type,
            lastTargetElement.rotation,
            lastTargetElement.value
          );

      selectElement(targetRow, targetCol);
    }
  }
};

const rotateElement = (row, col, angle) => {
  selectElement(row, col);
  const element = GridMatrix.matrix.getElementInPos(row, col);
  if (element) {
    element.rotation = mod(element.rotation + angle, 360);
    triggerElementRotation(element.element, element.rotation);
  }
};

const findFirstFreeCell = () => {
  for (let r = 0; r < GridMatrix.matrix.n; r++) {
    for (let c = 0; c < GridMatrix.matrix.m; c++) {
      let element = GridMatrix.matrix.getGridInPos(r, c).element;
      if (element === -1 || Object.keys(element).length === 0)
        return { row: r, col: c };
    }
  }
  return { row: -1, col: -1 };
};

// https://stackoverflow.com/a/39967517
const arraysEqual = (arr1, arr2) => {
  arr1 = Array.isArray(arr1) ? arr1 : [];
  arr2 = Array.isArray(arr2) ? arr2 : [];
  return arr1.length === arr2.length && arr1.every((el, ix) => el === arr2[ix]);
};

class GridMatrix {
  static matrix;
  constructor(n, m, savedPositions) {
    GridMatrix.matrix = this;

    this.label = undefined;
    this.id = undefined;

    this.n = n;
    this.m = m;
    this.matrix = [];

    this.gridDOMElement = document.querySelector(".grid--board");

    this.initGridDOM();

    this.createMatrix(savedPositions);

    this.addEventListeners();
  }

  initGridDOM() {
    this.gridDOMElement.style.gridTemplateColumns = `repeat(${this.m}, 1fr)`;
    this.gridDOMElement.style.gridTemplateRows = `repeat(${this.n}, 1fr)`;
  }

  createMatrix(savedPositions) {
    for (let r = 0; r < this.n; r++) {
      this.matrix[r] = [];
      for (let c = 0; c < this.m; c++) {
        const gridPosElement = this.createGridPosElement(r, c);
        this.gridDOMElement.appendChild(gridPosElement);
        this.matrix[r][c] = new Grid(r, c, gridPosElement);

        // check to see if we have a saved element
        // creating errors related to savedPositions,
        // check for errors there
        if (
          savedPositions &&
          savedPositions[r][c] &&
          savedPositions[r][c].element !== -1
        )
          this.matrix[r][c].addElement(
            savedPositions[r][c].element.type,
            savedPositions[r][c].element.rotation,
            savedPositions[r][c].element.value
          );
      }
    }
  }

  createGridPosElement(r, c) {
    const gridPosElement = document.createElement("div");
    gridPosElement.classList.add("grid--pos");
    gridPosElement.dataset.r = r;
    gridPosElement.dataset.c = c;
    return gridPosElement;
  }

  addEventListeners() {
    this.gridDOMElement.addEventListener("dragover", (e) => e.preventDefault());

    this.gridDOMElement.addEventListener("drop", (e) => {
      const type = e.dataTransfer.getData("text");
      const gridElement = e.target.closest(".grid--pos");
      const { r, c } = gridElement.dataset;
      this.matrix[r][c].addElement(type);
    });
  }

  getElementInPos(r, c) {
    return this.matrix[r][c].element !== -1 ? this.matrix[r][c].element : -1;
  }

  getGridInPos(r, c) {
    return this.matrix[r][c];
  }
}

class GridElement {
  constructor(type, r, c, rot, value) {
    if (!["arrow", "box"].includes(type)) return;
    this.type = type;
    this.r = r;
    this.c = c;
    this.rotation = rot;
    this.value = value;

    this.element =
      type === "arrow"
        ? this.createArrowElement(r, c, rot)
        : this.createBoxElement(r, c, rot, value);
  }

  focus() {
    if (inFocusMode)
      GridMatrix.matrix.getElementInPos(this.r, this.c).unfocus();

    inFocusMode = [this.r, this.c];
    this.element.classList.add("focused");

    if (this.type === "box") {
      this.element.querySelector("textarea").focus();
    }
  }

  unfocus() {
    this.element.classList.remove("focused");
    inFocusMode = false;
  }

  createBoxElement(r, c, rot, value) {
    const boxElement = document.createElement("div");
    boxElement.classList.add("grid--box--element", "grid--element");

    const groupElement = document.createElement("div");
    const textElement = document.createElement("p");

    const textAreaElement = document.createElement("textarea");

    textAreaElement.value = this.value || "TEXT";
    textElement.textContent = this.value || "TEXT";

    groupElement.appendChild(textElement);
    groupElement.appendChild(textAreaElement);

    textAreaElement.onblur = (e) => onTextAreaBlur(e, textElement);

    boxElement.appendChild(groupElement);
    GridMatrix.matrix.getGridInPos(r, c).grid.appendChild(boxElement);

    triggerElementRotation(boxElement, rot);
    return boxElement;
  }

  createArrowElement(r, c, rot) {
    const boxElement = document.createElement("div");
    const arrowElement = document.createElement("div");

    boxElement.classList.add("grid--arrow--element", "grid--element");

    arrowElement.onmouseleave = (e) => onMouseLeaveElement(e, r, c);

    boxElement.appendChild(arrowElement);
    GridMatrix.matrix.getGridInPos(r, c).grid.appendChild(boxElement);

    triggerElementRotation(arrowElement, rot);
    return arrowElement;
  }
}

class Grid {
  constructor(r, c, gridElement) {
    this.r = r;
    this.c = c;
    this.element = -1;
    this.grid = gridElement;
  }

  addElement(type, rotation = 0, value) {
    if (this.element !== -1 && Object.keys(this.element).length > 0) return;
    const gridElement = new GridElement(type, this.r, this.c, rotation, value);
    if (gridElement) this.element = gridElement;
  }
}

let inFocusMode = false;

const createGridMatrix = (n, m = n, savedPositions) => {
  if (!n) return;
  initialise();
  new GridMatrix(n, m, savedPositions);
};

const onTextAreaBlur = (e, textElement) => {
  const value = e.target.value.trim();
  textElement.textContent = value;

  const [fR, fC] = inFocusMode;

  const element = GridMatrix.matrix.getElementInPos(fR, fC);
  element.unfocus();
  element.value = value;
};

const triggerFocusOnElement = (r, c) => {
  if (inFocusMode) {
    const [fR, fC] = inFocusMode;
    GridMatrix.matrix.getElementInPos(fR, fC).unfocus();
  }
  GridMatrix.matrix.getElementInPos(r, c).focus();
};

const triggerDeleteOnElement = (r, c) => {
  const element = GridMatrix.matrix.getGridInPos(r, c);
  if (element?.grid) {
    element.grid.innerHTML = "";
    GridMatrix.matrix.matrix[r][c].element = -1;
  }
};

const triggerElementRotation = (e, rotation) => {
  e.style.transform = `rotate(${rotation}deg)`;
};

const onMouseLeaveElement = (e, r, c) => {
  const gridElement = GridMatrix.matrix.getElementInPos(r, c);

  const element = gridElement.element;
  const rect = element.getBoundingClientRect();

  const { clientX: mouseX, clientY: mouseY } = e;

  if (mouseX < rect.left + 20 && mouseY < rect.top + 20) {
    gridElement.rotation = mod(gridElement.rotation - 90, 360);
  } else if (mouseX > rect.right - 20 && mouseY < rect.top + 20) {
    gridElement.rotation = mod(gridElement.rotation + 90, 360);
  }

  triggerElementRotation(element, gridElement.rotation);
};

const loadSaveFile = (save) => {
  let images = JSON.parse(localStorage.getItem("images"));
  if (!images) return showCreateGridPrompt();
  if (!images[save]) return showCreateGridPrompt();

  let gameSave = JSON.parse(images[save]);
  createGridMatrix(gameSave.n, gameSave.m, gameSave.matrix);
  GridMatrix.matrix.id = save;
  GridMatrix.matrix.label = gameSave.label;
};

const showFoundImagesPrompt = (savedImages) => {
  const template = document
    .querySelector("#select--image--prompt--template")
    .content.cloneNode(true);

  const selectPreviousImageDOMElement = template.querySelector(
    'button[value="true"]'
  );
  const selectNewImageDOMElement = template.querySelector(
    'button[value="false"]'
  );

  document.body.appendChild(template);
  selectPreviousImageDOMElement.addEventListener("click", (e) => {
    document.querySelector(".select--image--prompt").remove();
    showPreviousImagePrompt(savedImages);
  });
  selectNewImageDOMElement.addEventListener("click", (e) => {
    document.querySelector(".select--image--prompt").remove();
    showCreateGridPrompt();
  });
};

const showPreviousImagePrompt = (savedImages) => {
  const template = document
    .querySelector("#select--image--prompt--dropdown--template")
    .content.cloneNode(true);

  document.body.appendChild(template);

  const prompt = document.querySelector(".select--image--dropdown--prompt");
  const dropdown = prompt.querySelector("select");

  dropdown.innerHTML = "";

  Object.entries(savedImages).forEach(([id, data]) => {
    data = JSON.parse(data);
    dropdown.innerHTML += `<option value="${id}">${data.label}</option>`;
  });

  prompt.addEventListener("submit", (e) => {
    prompt.remove();

    e.preventDefault();
    loadSaveFile(dropdown.value);
  });
};

const showCreateGridPrompt = () => {
  const template = document
    .querySelector("#create--grid--prompt--template")
    .content.cloneNode(true);

  document.body.appendChild(template);

  const createGridPromptDOMElement = document.querySelector(
    ".create--grid--prompt"
  );

  createGridPromptDOMElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const rowDOMElement = e.target.querySelector("#rows--count");
    const colDOMElement = e.target.querySelector("#cols--count");

    const r = parseInt(rowDOMElement.value);
    const c = parseInt(colDOMElement.value);

    if (!r || !c) return;
    createGridPromptDOMElement.remove();

    createGridMatrix(r, c);
  });
};

const showImageLabelPrompt = async () => {
  return new Promise((resolve) => {
    const template = document
      .querySelector("#label--image--prompt--template")
      .content.cloneNode(true);

    document.body.appendChild(template);

    const backdrop = document.createElement("div");
    backdrop.classList.add("prompt--backdrop");
    document.body.appendChild(backdrop);

    const prompt = document.querySelector(".label--image--prompt");

    prompt.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = prompt.querySelector("input");

      const inputValue = input.value.trim();
      if (inputValue.length == 0)
        return notify("ERROR: You must enter a label.");
      prompt.remove();
      backdrop.remove();

      resolve(inputValue);
    });
  });
};

let savedImages = JSON.parse(localStorage.getItem("images"));
if (savedImages) {
  showFoundImagesPrompt(savedImages);
} else {
  showCreateGridPrompt();
}

let initialised = false;
const initialise = () => {
  if (initialised) return;
  const template = document
    .querySelector("#grid--board--template")
    .content.cloneNode(true);

  document.body.appendChild(template);

  document.addEventListener("dblclick", (e) => {
    document.body.classList.remove("keyboard--mode");
    if (!inFocusMode && e.target.closest(".grid--box--element")) {
      const { r, c } = e.target.closest(".grid--pos").dataset;
      triggerFocusOnElement(r, c);
    }
  });

  document.addEventListener("contextmenu", (e) => {
    document.body.classList.remove("keyboard--mode");
    if (!inFocusMode && e.target.closest(".grid--element")) {
      e.preventDefault();
      const { r, c } = e.target.closest(".grid--pos").dataset;
      triggerDeleteOnElement(r, c);
    }
  });

  const addElementToolbelt = document.querySelectorAll(".elements > .element");
  addElementToolbelt.forEach((el) => {
    el.draggable = true;
  });

  window.addEventListener("dragstart", (e) => {
    document.body.classList.remove("keyboard--mode");
    e.dataTransfer.setData("text/plain", e.target.dataset.type);
  });

  // POSSIBLE REFINEMENTS
  // I could also keep track of only the active elements
  // to store less data.
  const saveGameBtnDOMElement = document.querySelector(".save--btn");
  saveGameBtnDOMElement.addEventListener("click", async (e) => {
    let images = JSON.parse(localStorage.getItem("images"));
    if (!images) images = {};

    let label = GridMatrix.matrix.label;

    if (!label) label = await showImageLabelPrompt();
    GridMatrix.matrix.label = label;

    images[GridMatrix.matrix.id || generateUniqueId()] = JSON.stringify(
      GridMatrix.matrix
    );
    localStorage.setItem("images", JSON.stringify(images));

    notify("Success: Your image has been saved!", "success");
  });
  initialised = true;
};

const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const mod = (n, m) => ((n % m) + m) % m;

const notify = (text, type) => {
  if (currentNotification) currentNotification.remove();

  const template = document
    .querySelector("#notification--template")
    .content.cloneNode(true);

  document.body.appendChild(template);

  currentNotification = document.querySelector(".notification");

  currentNotification.classList.add(type);
  currentNotification.textContent = text;

  let id = generateUniqueId();
  currentNotification.id = id;

  setTimeout(() => {
    if (currentNotification.id === id) currentNotification.remove();
    currentNotification = undefined;
  }, 3000);
};
