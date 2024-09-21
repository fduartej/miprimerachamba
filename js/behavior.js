const mybutton = document.getElementById("buttonChange");

mybutton.addEventListener("click", changeColor);

function changeColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  mybutton.style.backgroundcolor = `rgb(${red}, ${green}, ${blue})`;
}
