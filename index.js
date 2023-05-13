var randomNumber = Math.floor((Math.random() * 6)) + 1;
var randomImage = "images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randImg2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randImg2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber == randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!"
}