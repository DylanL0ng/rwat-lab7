/*
Regular expressions
a - <[a-zA-Z][a-zA-Z0-9]*>
b - </[a-zA-Z][a-zA-Z0-9]*>
c - <\/?[a-zA-Z][a-zA-Z0-9]*(\s+[^>]*)?>
d - ([a-zA-Z])\1
e - https?:\/\/[^\s/$.?#].[^\s]*
f - [a-zA-Z_$][a-zA-Z0-9_$]*
*/

const STUDENT_DATA_JSON =
  "[" +
  '{"name": "Annie Apple","id": "X00111111","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' +
  '{"name": "Ben Bounce","id": "B00111111","address": "Rathmines, D6","grades": [44, 22, 20, 33, 41, 50]},' +
  '{"name": "Charlie Curry","id": "B00222222","address": "Phibsboro, D7","grades": [80, 88, 75, 81, 90, 77]},' +
  '{"name": "Dan Dreamer","id": "X00222222","address": "Cabra, D7","grades": [64, 55, 66, 65, 78, 62]},' +
  '{"name": "Emmy Ember","id": "X00333333","address": "Stoneybatter, D7","grades": [53, 55, 55, 52, 51, 60]},' +
  '{"name": "Fiona Falls","id": "C00111111","address": "Grangegorman, D7","grades": [90, 91, 88, 80, 81, 97]},' +
  '{"name": "Georgina Gull","id": "C00222222","address": "City Centre, D1","grades": [76, 67, 63, 71, 55, 82]},' +
  '{"name": "Harry Hops","id": "C00333333","address": "Cabra, D7","grades": [50, 33, 55, 11, 42, 61]},' +
  '{"name": "Iris Indie","id": "X00444444","address": "Tallaght, D24","grades": [61, 71, 58, 70, 65, 67]},' +
  '{"name": "Jack Jobs","id": "C00444444","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' +
  '{"name": "Kat Kid","id": "C00555555","address": "Grangegorman, D7","grades": [41, 41, 50, 48, 55, 44]},' +
  '{"name": "Lula Lock","id": "C00666666","address": "Cabra, D7","grades": [77, 80, 85, 80, 78, 81]}' +
  "]";

const STUDENT_DATA = JSON.parse(STUDENT_DATA_JSON);

const initialHTML = `
<div class="welcome--student--messages">
      <p></p>
    </div>
    <div class="overall--class--average--container">
      <h2>Overall Class Average</h2>
      <p></p>
    </div>
    <div class="student--id--container">
      <h2>Student IDs</h2>
      <p class="student--id"></p>
    </div>

    <div class="student--grade--container">
      <h2>Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Town</th>
            <th>Postcode</th>
            <th>Average Grade</th>
            <th>Result Category</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <div class="failed--student--grade--container">
      <h2>Failed Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Town</th>
            <th>Postcode</th>
            <th>Average Grade</th>
            <th>Result Category</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <div class="student--messages--container">
      <h2>Student Messages</h2>
      <div></div>
    </div>
`;

document.body.innerHTML = initialHTML;

const studentIdDOM = document.querySelector(".student--id");

const studentInformationTableDOM = document.querySelector(
  ".student--grade--container > table > tbody"
);
const failedStudentInformationTableDOM = document.querySelector(
  ".failed--student--grade--container > table > tbody"
);
const overallClassAverageDOM = document.querySelector(
  ".overall--class--average--container > p"
);
const studentMessagesDOM = document.querySelector(
  ".student--messages--container > div"
);
const welcomeStudentMessagesDOM = document.querySelector(
  ".welcome--student--messages"
);

// Define functions

// This function takes an array of grades as the input and
// returns the average by using reduce to sum of the total
// and dividing it by the number of grades
const getAverageGrade = (grades) => {
  return (
    grades.reduce((sum, grade) => sum + grade, 0) / grades.length
  ).toFixed(2);
};

// This function takes in an array of objects containing the
// students information, and a DOM table body element, and fills in the html
// of the table with the student information
const populateTable = (list, table) => {
  list.forEach((x) => {
    const row = `<tr>
            <td>${x.name}</td>
            <td>${x.surname}</td>
            <td>${x.town}</td>
            <td>${x.postcode}</td>
            <td>${x.averageGrade}</td>
            <td>${x.result}</td>
          </tr>`;

    table.innerHTML += row;
  });
};

// This is a generator function that infinitely loops
// through the student list and returns a template literal
// string.
const studentGenerator = function* () {
  let index = 0;
  while (true) {
    const student = studentList[index];
    yield `Hello ${student.name}, welcome to the new semester!`;
    index = (index + 1) % studentList.length;
  }
};

// This function is used to loop through every 1-3 seconds and
// update the welcome user message DOM element with a new student
// welcome message.
const displayWelcomeMessages = async () => {
  const generator = studentGenerator();

  while (true) {
    const { value: message } = generator.next();

    welcomeStudentMessagesDOM.textContent = message;

    const randomDelay = Math.random() * 3000;
    await new Promise((resolve) => setTimeout(resolve, randomDelay));
  }
};

// This function is a tagged template function that takes in
// an array of strings, a string name which represents the students
// name, a float averageGrade which represents the users average grade,
// and an award result
const messageTemplate = (strings, name, averageGrade, award) => {
  const resultMessage = award
    ? `Congratulations, you have won the Best in Class award!`
    : averageGrade >= 40
    ? `Congratulations on your progression to the next semester!`
    : `Unfortunately, you have not passed and will have to repeat some exams.`;

  return `${strings[0]}${name}${strings[1]}${averageGrade}${strings[2]}${resultMessage}`;
};

// This function is a curried function which takes in a students
// name, award, and averageGrade and calls the tagged template function
const createMessage = (award) => (name) => (averageGrade) =>
  messageTemplate`Dear ${name}, your average result for the semester is ${averageGrade}. ${award}`;

// This is an initialiser function which will be called initially
// on page load and setup all the neccessary method calls
const init = () => {
  studentIdDOM.textContent = studentIds;
  overallClassAverageDOM.textContent = overallClassAverage + "%";

  studentMessagesDOM.innerHTML = studentList.reduce((acc, x) => {
    let message = "";

    if (x.averageGrade >= 40 && x.averageGrade == highestAverageGrade) {
      message = createMessage(true)(x.name)(x.averageGrade);
    } else if (x.averageGrade >= 40) {
      message = createMessage(false)(x.name)(x.averageGrade);
    } else {
      message = createMessage(false)(x.name)(x.averageGrade);
    }

    return acc + `<p class="message">${message}</p>`;
  }, "");

  populateTable(studentList, studentInformationTableDOM);
  populateTable(failedStudentList, failedStudentInformationTableDOM);
  displayWelcomeMessages();
};

// Define variables
const studentIds = STUDENT_DATA.map((x) => x.id).join(", ");
const highestAverageGrade = Math.max(
  ...STUDENT_DATA.map((x) => getAverageGrade(x.grades))
);

const studentList = STUDENT_DATA.map((x) => {
  // Seperates the students name and address using
  // the split string method
  const [name, surname] = x.name.split(" ");
  const [town, postcode] = x.address.split(", D");

  const averageGrade = getAverageGrade(x.grades);

  let result = (averageGrade >= 40 && "P") || "F";

  if (result === "P" && averageGrade == highestAverageGrade) result = "A";

  // Return a table of the new formatted
  // student data
  return {
    name,
    surname,
    town,
    postcode,
    averageGrade,
    result,
    failed: result === "F",
  };
});

// This variable will get the overall
// class average grade and get the average of
// that grade
const overallClassAverage = (
  studentList.reduce(
    (sum, student) => sum + parseFloat(student.averageGrade),
    0
  ) / studentList.length
).toFixed(2);

const failedStudentList = studentList.filter((x) => x.failed);

init();
