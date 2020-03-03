var buttonColors = ['green', 'red', 'yellow', 'blue'];
var colorPattern = [];
var clickedPattern = [];
var started = false;
var level = 0;


document.querySelector("#level-title").addEventListener("click", someFunction => {
    if (!started) {
        document.querySelector("#level-title").text = ("level " + level);
        numberSequence();
        started = true;
    }
});


// USER INPUT >>CLICK>>LIGHTNEN UP>>PUSH IN USER ARRAY
document.querySelector('.btn.yellow').addEventListener("click", function() {
    clickedPattern.push("yellow");
    document.querySelector('.btn.yellow').classList.add('active')
    setTimeout(function() {
        document.querySelector('.btn.yellow').classList.remove('active')
    }, 100);
    checkAnswer(clickedPattern.length - 1);


});
document.querySelector('.btn.red').addEventListener("click", function() {

    clickedPattern.push("red");
    document.querySelector('.btn.red').classList.add('active')
    setTimeout(function() {
        document.querySelector('.btn.red').classList.remove('active')
    }, 100);
    checkAnswer(clickedPattern.length - 1);

});
document.querySelector('.btn.blue').addEventListener("click", function() {

    clickedPattern.push("blue");
    document.querySelector('.btn.blue').classList.add('active')
    setTimeout(function() {
        document.querySelector('.btn.blue').classList.remove('active')
    }, 100);
    checkAnswer(clickedPattern.length - 1);

});
document.querySelector('.btn.green').addEventListener("click", function() {

    clickedPattern.push("green");
    document.querySelector('.btn.green').classList.add('active')
    setTimeout(function() {
        document.querySelector('.btn.green').classList.remove('active')
    }, 100);
    checkAnswer(clickedPattern.length - 1);

});

function checkAnswer(currentLevel) {
    if (colorPattern[currentLevel] === clickedPattern[currentLevel]) {
        if (clickedPattern.length === colorPattern.length) {
            setTimeout(function() {
                numberSequence();
            }, 1000);
        }
    } else {
        document.querySelector("#level-title").innerHTML = "☠️ ->rEFreSH<- ☠️";
        startOver();
    }
}

function numberSequence() {
    clickedPattern = [];
    level++;
    document.querySelector("#level-title").innerHTML = ("Level " + level);
    const randomNr = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNr];
    colorPattern.push(randomColor);
    document.querySelector(`.btn.${randomColor}`).classList.add('active');
    setTimeout(function() {
        document.querySelector(`.btn.${randomColor}`).classList.remove('active');
    }, 100);
    checkAnswer(clickedPattern.length - 1);
}
numberSequence();






function startOver() {
    level = 0;
    colorPattern = [];
    started = false;
}