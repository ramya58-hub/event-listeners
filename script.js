// Select the button and paragraph
const button = document.getElementById("clickButton");
const message = document.getElementById("message");

// Add click event listener
button.addEventListener("click", function () {
    message.textContent = "Button clicked successfully!";
});

// Select the input field
const nameInput = document.getElementById("nameInput");

// Add input event listener
nameInput.addEventListener("input", function () {
    message.textContent = "You entered: " + nameInput.value;
});
