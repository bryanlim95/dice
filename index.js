var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var d1 = document.getElementById("img1");
var d2 = document.getElementById("img2");
var title = document.getElementById("title");

d1.src = "https://user-images.githubusercontent.com/60686136/76737723-46e60a80-67a4-11ea-9baa-9d2a9d05ef35.png";
d2.src = "\\images\\dice" + randomnumber2 + ".png";
if (randomnumber1 > randomnumber2) {
  title.innerHTML = "Player 1 Wins!";
} else if (randomnumber2 > randomnumber1) {
  title.innerHTML = "Player 2 Wins!";
} else {
  title.innerHTML = "Draw!";
}
