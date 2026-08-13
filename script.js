const button1 = document.getElementById ("btn1");
const button2 = document.getElementById ("btn2");
const button3 = document.getElementById ("btn3");
const output = document.getElementById ("output");
button1.addEventListener( "click", function () {
  output.textContent = "Button 1 was clicked! ";
});
button2.addEventListener( "click", function () {
document.body.style.backgroundColor = " lightblue";
output.textContent = "Background color changed. ";
});
button3.addEventListener( "click", function () {
document.body.style.backgroundColor = "white";
output.textContent = "Page has been reset. ";
});
