function Q6RangeValue() {
    var range = document.querySelector(".Q6_range_input");
    var value = document.querySelector(".Q6_range_value");

    value.innerHTML = range.value;
}

function Q8Add() {
    var value = document.querySelector(".Q8");

    value.innerHTML = (parseInt(value.innerHTML) + 1);
}

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

    var q5 = document.querySelector(".Q5");
    if (q5.value !== "Yellow Dwarf") {
        q5.style.boxShadow = "0px 0px 3px 5px red";
    } else {
        q5.style.boxShadow = "0px 0px 3px 5px green";
        currentScore++;
    }

    var q6 = document.querySelector(".Q6_range_input");
    var q6Text = document.querySelector(".Q6_range_value");
    if (q6.value != 26000) {
        q6Text.style.color = "red";
    } else {
        q6Text.style.color = "green";
        currentScore++;
    }

    var q7 = document.querySelector(".Q7");
    if (q7.value !== "#ff0000") {
        q7.style.border = "4px red solid";
        q7.style.borderRadius = "5px";
    } else {
        q7.style.border = "4px green solid";
        q7.style.borderRadius = "5px";
        currentScore++;
    }

    var q8 = document.querySelector(".Q8");
    if (q8.innerHTML != 6371) {
        q8.style.color = "red";
    } else {
        q8.style.color = "green";
        currentScore++;
    }

    var q9 = document.getElementsByName("Q9");
    var pic = document.querySelectorAll(".Q9_container input[type=checkbox]:checked + label");
    var correct = q9[0].checked == false && q9[1].checked == false && q9[2].checked == true && q9[3].checked == true;
    for (var i = 0; i < pic.length; i++) {
        if (correct) {
            pic[i].style.border = "2px green solid";
            pic[i].style.boxShadow = "0px 0px 10px 3px green";
        } else {
            pic[i].style.border = "2px red solid";
            pic[i].style.boxShadow = "0px 0px 10px 3px red";
        }
    }
    if (correct) {
        currentScore++;
    }

    playerScore.innerHTML = currentScore.toString();
    if (currentScore >= 6) {
        playerScore.style.color = "springgreen";
    } else if (currentScore >= 3) {
        playerScore.style.color = "orange";
    } else {
        playerScore.style.color = "red";
    }

    resultContainer.style.display = "inherit";
    document.querySelector(".check_answer_button").style.display = "none";
    document.documentElement.scrollTop = 0;
    event.preventDefault();
}