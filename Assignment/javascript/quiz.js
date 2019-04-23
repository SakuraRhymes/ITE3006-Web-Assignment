function checkAnswer() {
    var correctAnswerList = ["b", "c", "c", "d"];
    var playerAnswerList = document.querySelectorAll(".question input:checked");
    var resultContainer = document.querySelector(".result");
    var playerScore = document.querySelector(".score");
    var currentScore = 0;

    for (var i = 0; i < correctAnswerList.length; i++) {
        var playerAnswer = document.querySelector("#" + playerAnswerList[i].id + " + label");
        if (playerAnswerList[i].value !== correctAnswerList[i]) {
            playerAnswer.style.color = "red";
        } else {
            playerAnswer.style.color = "springgreen";
            currentScore++;
        }
    }

    playerScore.innerHTML = currentScore.toString();
    if (currentScore > correctAnswerList.length * (2 / 3)) {
        playerScore.style.color = "springgreen";
    } else if (currentScore > correctAnswerList.length * (1 / 3)) {
        playerScore.style.color = "yellow";
    } else {
        playerScore.style.color = "red";
    }

    resultContainer.style.display = "inherit";
    event.preventDefault();
}