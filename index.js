var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var d1 = document.getElementById("img1");
var d2 = document.getElementById("img2");
var title = document.getElementById("title");

d1.src = "master/images/dice" + randomnumber1 + ".png";
d2.src = "master/images/dice" + randomnumber2 + ".png";
if (randomnumber1 > randomnumber2) {
  title.innerHTML = "Player 1 Wins!";
} else if (randomnumber2 > randomnumber1) {
  title.innerHTML = "Player 2 Wins!";
} else {
  title.innerHTML = "Draw!";
}
