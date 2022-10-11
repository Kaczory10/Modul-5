function playGame(playerInput) {
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "nożyce";
    } else if (argMoveId == 3) {
      return "papier";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  displayResult(playerMove, computerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      printMessage("Ty przegrywasz!");
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("Ty przegrywasz!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Ty wygrywasz");
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Ty przegrywasz!");
    } else if (
      argComputerMove == "papier" &&
      argPlayerMove == "nieznany ruch"
    ) {
      printMessage("Ty przegrywasz!");
    } else if (
      argComputerMove == "kamień" &&
      argPlayerMove == "nieznany ruch"
    ) {
      printMessage("Ty przegrywasz!");
    } else if (
      argComputerMove == "nożyce" &&
      argPlayerMove == "nieznany ruch"
    ) {
      printMessage("Ty przegrywasz!");
    }
  }
}
function buttonClicked(moveId) {
  playGame(moveId);
}

let rockButton = document.getElementById("play-rock");

rockButton.addEventListener("click", function () {
  buttonClicked(1);
});

let scissorsButton = document.getElementById("play-scissors");

scissorsButton.addEventListener("click", function () {
  buttonClicked(2);
});
let papperButton = document.getElementById("play-paper");

papperButton.addEventListener("click", function () {
  buttonClicked(3);
});
