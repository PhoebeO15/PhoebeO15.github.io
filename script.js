//#2
// Create the button element
let button = document.createElement("button");

// Set the initial text of the button
button.textContent = "Darken";

//#3
// Add the button to the page
document.body.appendChild(button);

// Add a click event to the button
button.addEventListener("click", function () {

  //#4
  // Check current background color to decide mode
  if (document.body.style.backgroundColor === "#D6D39F") {
    // If dark mode is on, switch to light mode
    document.body.style.backgroundColor = "#BAB78A";       // background to light
    document.body.style.color = "#130000";                   // text to dark
    button.textContent = "Darken";                      // button text changes to "dark mode"

    //#5
  } else {
    // If light mode is on, switch to dark mode
    document.body.style.backgroundColor = "#BAB78A";        // background to dark
    document.body.style.color = "#D6D39F";                    // text to light
    button.textContent = "Lighten";                      // button text changes to "light mode"
  }
});
