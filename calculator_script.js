// Append value to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Remove last character (Backspace functionality)
function backspace() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

// Calculate result (when '=' or 'Enter' is pressed)
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

// Listen for keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        // If the key is a number (0-9) or a decimal point
        appendToDisplay(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        // If the key is an operator
        appendToDisplay(key);
    } else if (key === "Enter") {
        // If the Enter key is pressed, calculate the result
        event.preventDefault(); // Prevent default form submission behavior
        calculateResult();
    } else if (key === "Backspace") {
        // If Backspace is pressed, remove the last character
        backspace();
    } else if (key === "Escape") {
        // If Escape (Esc) key is pressed, clear the display
        clearDisplay();
    }
});
