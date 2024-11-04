const puzzleBoard = document.querySelector(".puzzle--board");

let gameState = JSON.parse(localStorage.getItem("data"));
let savedDisabledPiece;
let amountOfTimesToScramble = 1;

const initialiseBoard = () => {
  const saveGameButton = document.querySelector(".save--game--btn");

  saveGameButton.style.display = "block";

  saveGameButton.addEventListener("click", (e) => {
    saveGame();
  });

  let puzzlePieces = document.querySelectorAll(".puzzle--piece");

  let piecePositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let emptyIdx = 0;
  if (gameState?.state) {
    piecePositions = gameState.state;
  } else {
    const { puzzle, empty } = shuffle(piecePositions, amountOfTimesToScramble);
    piecePositions = puzzle;
    emptyIdx = empty;
  }
  let x = 0;
  let y = 0;

  puzzlePieces.forEach((el, i) => {
    if (i % 3 == 0) {
      y += 1;
      x = 1;
    }
    el.id = `puzzle--piece--${piecePositions[i]}`;
    el.dataset.id = piecePositions[i];
    el.draggable = true;
    el.dataset.x = x;
    el.dataset.y = y;

    if (
      gameState?.disabled &&
      x == gameState?.disabled[0] &&
      y == gameState?.disabled[1]
    ) {
      el.dataset.disabled = 1;
      savedDisabledPiece = el;
    }
    x += 1;
  });

  if (!gameState?.disabled) {
    puzzlePieces[emptyIdx].dataset.disabled = 1;
    savedDisabledPiece = puzzlePieces[emptyIdx];
  }
};

const surroundingPieces = (z) => {
  let w = 3;
  let h = 3;
  let pieces = [];

  const left = z % w > 0 ? z - 1 : null;
  const up = z >= w ? z - w : null;
  const right = z % w < w - 1 ? z + 1 : null;
  const down = z < (h - 1) * w ? z + w : null;

  // Filter null values
  if (left !== null) pieces.push(left);
  if (up !== null) pieces.push(up);
  if (right !== null) pieces.push(right);
  if (down !== null) pieces.push(down);

  return pieces;
};

// Shuffle solution found and modified from the below stack overflow solution
// https://stackoverflow.com/questions/62764453/how-to-shuffle-a-sliding-tile-puzzle-without-making-it-unsolvable-python-3
const shuffle = (puzzle, moves) => {
  let empty = 0;
  let lastPiece = empty;

  for (let i = 0; i < moves; i++) {
    let pieces = surroundingPieces(empty);

    // Select a random piece to move
    let pieceIndex = pieces[Math.floor(Math.random() * pieces.length)];

    // Swap the selected piece with the empty space
    lastPiece = puzzle[empty];
    puzzle[empty] = puzzle[pieceIndex];
    puzzle[pieceIndex] = lastPiece;

    empty = pieceIndex;
  }

  return { puzzle, empty };
};

const puzzlePieceMoveValid = (sourcePiece, targetPiece) => {
  if (!targetPiece.dataset.disabled) return false;
  let targetPieceX = parseInt(targetPiece.dataset.x);
  let targetPieceY = parseInt(targetPiece.dataset.y);

  let sourcePieceX = parseInt(sourcePiece.dataset.x);
  let sourcePieceY = parseInt(sourcePiece.dataset.y);

  // source piece has to be adjacent to target piece
  // to achieve this we get the distance in x and y
  // if its only 1 block either direction we allow movement
  const isAdjacent =
    (Math.abs(targetPieceX - sourcePieceX) === 1 &&
      targetPieceY === sourcePieceY) ||
    (Math.abs(targetPieceY - sourcePieceY) === 1 &&
      targetPieceX === sourcePieceX);

  return isAdjacent;
};

puzzleBoard.addEventListener("dragstart", (e) => {
  if (
    e.target.dataset.disabled == 1 ||
    !puzzlePieceMoveValid(e.target, savedDisabledPiece)
  ) {
    e.preventDefault();
  }
  e.dataTransfer.setData("text/plain", e.target.id);
});
puzzleBoard.addEventListener("dragover", (e) => {
  e.preventDefault();
});
puzzleBoard.addEventListener("drop", (e) => {
  const targetPuzzlePiece = e.target;
  if (e.target.dataset.disabled == 0) return;
  const id = e.dataTransfer.getData("text");
  const sourcePuzzlePiece = document.getElementById(id);
  if (puzzlePieceMoveValid(sourcePuzzlePiece, targetPuzzlePiece)) {
    let tempElementId = sourcePuzzlePiece.id;
    let tempId = sourcePuzzlePiece.dataset.id;

    sourcePuzzlePiece.dataset.disabled = 1;
    sourcePuzzlePiece.draggable = false;
    sourcePuzzlePiece.id = targetPuzzlePiece.id;
    sourcePuzzlePiece.dataset.id = targetPuzzlePiece.dataset.id;

    savedDisabledPiece = sourcePuzzlePiece;

    targetPuzzlePiece.dataset.disabled = 0;
    targetPuzzlePiece.draggable = true;
    targetPuzzlePiece.id = tempElementId;
    targetPuzzlePiece.dataset.id = tempId;

    // check if won
    if (hasPlayerWonGame()) {
      const disabledPiece = document.querySelector(
        '.puzzle--piece[data-disabled="1"]'
      );

      disabledPiece.dataset.disabled = 0;
      savedDisabledPiece = undefined;
      setTimeout(() => {
        window.alert("You won!");
      }, 300);
    }
  }
});

const hasPlayerWonGame = () => {
  const pieces = document.querySelectorAll(".puzzle--piece");
  let counter = 1;
  for (let i = 0; i < pieces.length; i++) {
    let el = pieces[i];
    if (el.dataset.id != counter) {
      return false;
    }
    counter += 1;
  }
  return true;
};

const saveGame = () => {
  const pieces = document.querySelectorAll(".puzzle--piece");
  const gameData = {
    state: [],
    disabled: [],
  };

  pieces.forEach((el, i) => {
    const id = el.dataset.id;
    gameData.state[i] = parseInt(id);
    if (el.dataset.disabled == 1) {
      gameData.disabled = [parseInt(el.dataset.x), parseInt(el.dataset.y)];
    }
  });

  localStorage.setItem("data", JSON.stringify(gameData));
};

const setupInitialDialog = () => {
  const newGameDialog = document.querySelector("#dialog--new--game");
  const newGameButton = newGameDialog.querySelector(".new--game--btn");
  const loadGameButton = newGameDialog.querySelector(".load--game--btn");

  newGameButton.addEventListener("click", (e) => {
    gameState = null;
    localStorage.setItem("state", undefined);
    newGameDialog.close();
    setupDifficultyDialog();
  });

  loadGameButton.addEventListener("click", (e) => {
    newGameDialog.close();
    initialiseBoard();
  });

  newGameDialog.show();
};

const setupDifficultyDialog = () => {
  const difficultyDialog = document.querySelector(
    "#dialog--select--difficulty"
  );
  const difficultyDialogCounter = difficultyDialog.querySelector("p");
  const difficultyDialogSlider = difficultyDialog.querySelector("input");
  const difficultyDialogButton = difficultyDialog.querySelector("button");

  difficultyDialogCounter.textContent = `Scramble: ${amountOfTimesToScramble}`;
  difficultyDialogSlider.value = amountOfTimesToScramble;

  difficultyDialog.show();

  difficultyDialogSlider.addEventListener("change", (e) => {
    let value = e.target.value;
    amountOfTimesToScramble = parseInt(value);
    difficultyDialogCounter.textContent = `Scramble: ${amountOfTimesToScramble}`;
  });

  difficultyDialogButton.addEventListener("click", (e) => {
    difficultyDialog.close();
    initialiseBoard();
  });
};

if (gameState == null) setupDifficultyDialog();
else setupInitialDialog();
