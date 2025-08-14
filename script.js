// Create the button element
let button = document.createElement("button");

// Set the initial text of the button
button.textContent = "Darken";

// Set initial colors (light mode)
document.body.style.backgroundColor = "#D6D39F"; // light background
document.body.style.color = "#6A694D"; // dark text

// Style the button (optional)
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.padding = "10px 15px";
button.style.cursor = "pointer";

// Add the button to the page
document.body.appendChild(button);

// Track the current mode
let isLightMode = true;

// Add a click event to the button
button.addEventListener("click", function () {
  if (isLightMode) {
    // Switch to dark mode
    document.body.style.backgroundColor = "#6A694D"; // dark background
    document.body.style.color = "#D6D39F"; // light text
    button.textContent = "Lighten";
    isLightMode = false;
  } else {
    // Switch back to light mode
    document.body.style.backgroundColor = "#D6D39F"; // light background
    document.body.style.color = "#6A694D"; // dark text
    button.textContent = "Darken";
    isLightMode = true;
  }
});
