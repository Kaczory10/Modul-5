{
  const playGame = function(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log("Gracz wpisał: " + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(playerMove, computerMove);
  }

  let rockButton = document.getElementById("play-rock");

  rockButton.addEventListener("click", function () {
    playGame(1);
  });

  let scissorsButton = document.getElementById("play-scissors");

  scissorsButton.addEventListener("click", function () {
    playGame(2);
  });
  
  let papperButton = document.getElementById("play-paper");

  papperButton.addEventListener("click", function () {
    playGame(3);
  });
}