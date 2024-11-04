const inputElement = document.querySelector("input");
const gridElements = document.querySelectorAll(".row > div > div");
const containerElement = document.querySelector(".container-fluid");
const firstGridElement = gridElements[0];
const secondGridElement = gridElements[1];

const defaultString =
  "Here we go! This is an example of a Bootstrap 5 layout. Countdown: 5 4 3 2 1.";

const blockTexts = defaultString.split(" ");

const backgroundColours = [
  "bg-info",
  "bg-warning",
  "bg-success",
  "bg-danger",
  "bg-light",
  "bg-dark",
];

window.addEventListener("DOMContentLoaded", (e) => {
  gridElements.forEach((el, index) => {
    el.textContent = blockTexts[index];
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    const alphabeticalOrder = [...blockTexts].sort().reverse();

    gridElements.forEach((el, index) => {
      el.textContent = alphabeticalOrder[index];
    });
  } else if (e.key === "ArrowRight") {
    const alphabeticalOrder = [...blockTexts].sort();

    gridElements.forEach((el, index) => {
      el.textContent = alphabeticalOrder[index];
    });
  } else if (e.key === "ArrowUp") {
    gridElements.forEach((el, index) => {
      el.textContent = blockTexts[index];
    });
  } else if (e.key === "ArrowDown") {
    const randomOrder = [...blockTexts].sort(() => {
      return 0.5 - Math.random();
    });

    gridElements.forEach((el, index) => {
      el.textContent = randomOrder[index];
    });
  }
});

firstGridElement.addEventListener("click", (e) => {
  const inputValue = inputElement.value.trim();

  if (inputValue.length == 0) return;

  inputElement.value = "";
  const currentBackground = [...firstGridElement.classList].filter(
    (element) => {
      if (element.includes("bg-") && backgroundColours.includes(element))
        return true;
    }
  )[0];

  const backgroundsNotUsing = backgroundColours.filter(
    (element) => element !== currentBackground
  );

  const selectedBackground =
    backgroundsNotUsing[Math.floor(Math.random() * backgroundsNotUsing.length)];

  firstGridElement.classList.remove(currentBackground);
  firstGridElement.classList.add(selectedBackground);

  if (selectedBackground === "bg-dark")
    firstGridElement.classList.add("text-light");
  else firstGridElement.classList.remove("text-light");

  firstGridElement.textContent = inputValue;
});

secondGridElement.addEventListener("click", (e) => {
  containerElement.classList.toggle("fw-bold");
  containerElement.classList.toggle("fw-normal");
});
