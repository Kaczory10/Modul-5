const printMessage = function(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

const clearMessages = function() {
  document.getElementById("messages").innerHTML = "";
}

const getMoveName = function(argMoveId) {
  if (argMoveId == 1) {
    return STONE;
  } else if (argMoveId == 2) {
    return SCISSORS;
  } else if (argMoveId == 3) {
    return PAPER;
  }

  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return UNKNOWN_MOVE_MESSAGE;
}

const displayResult = function(argComputerMove, argPlayerMove) {
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

  if (argComputerMove == STONE && argPlayerMove == PAPER) {
    printMessage(YOU_WIN_MESSAGE);
  } else if (argComputerMove == SCISSORS && argPlayerMove == PAPER) {
    printMessage(YOU_LOOSE_MESSAGE);
  } else if (argComputerMove == PAPER && argPlayerMove == PAPER) {
    printMessage(DRAW_MESSAGE);
  } else if (argComputerMove == STONE && argPlayerMove == SCISSORS) {
    printMessage(YOU_LOOSE_MESSAGE);
  } else if (argComputerMove == SCISSORS && argPlayerMove == SCISSORS) {
    printMessage(DRAW_MESSAGE);
  } else if (argComputerMove == PAPER && argPlayerMove == SCISSORS) {
    printMessage(YOU_WIN_MESSAGE);
  } else if (argComputerMove == STONE && argPlayerMove == STONE) {
    printMessage(DRAW_MESSAGE);
  } else if (argComputerMove == SCISSORS && argPlayerMove == STONE) {
    printMessage(YOU_WIN_MESSAGE);
  } else if (argComputerMove == PAPER && argPlayerMove == STONE) {
    printMessage(YOU_LOOSE_MESSAGE);
  } else if (
    argComputerMove == PAPER &&
    argPlayerMove == UNKNOWN_MOVE_MESSAGE
  ) {
    printMessage(YOU_LOOSE_MESSAGE);
  } else if (
    argComputerMove == STONE &&
    argPlayerMove == UNKNOWN_MOVE_MESSAGE
  ) {
    printMessage(YOU_LOOSE_MESSAGE);
  } else if (
    argComputerMove == SCISSORS &&
    argPlayerMove == UNKNOWN_MOVE_MESSAGE
  ) {
    printMessage(YOU_LOOSE_MESSAGE);
  }
}