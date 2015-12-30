// reddit.com/r/dailyprogrammer/wiki/challenges
// [2/9/12] Challenge #1 [Hard]

var ceiling = 100, floor = 1;
var number = function(){ return Math.floor(Math.random() * (ceiling - floor)) + floor; };
var goal = number();
var correctGuess = false, counter = 0;

while (!correctGuess){
    counter++;
    var randomNum = number();
    if (randomNum === goal){
        correctGuess = true;
        console.log(goal + " correctly guessed in " + counter + " attempts.");
    } else if (randomNum > goal) {
        console.log("Guessed: " + randomNum + ". Too high.");
        ceiling = randomNum - 1;
    } else {
        console.log("Guessed: " + randomNum + ". Too low.");
        floor = randomNum + 1;
    }
}