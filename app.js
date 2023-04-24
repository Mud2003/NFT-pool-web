// when clicked the humburger
function showUl(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var currentValue = element.style[propertyName]; // Get the current value of the CSS property
    var newValue = currentValue === 'none' ? 'flex' : 'none'; // Toggle the value to the opposite color
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}
// when clicked the humburger change nav-back in mobile view
function changeBackground(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var currentValue = element.style[propertyName]; // Get the current value of the CSS property
    var newValue = currentValue === 'transparent' ? 'rgba(27, 14, 45, 1)' : 'rgba(27, 14, 45, 1)'; // Toggle the value to the opposite color
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}


// Resize the screenWidth
function changeCSSProperty(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var screenWidth = window.innerWidth; // Get the screen width
    var newValue = screenWidth > 1245 ? 'none' ? 'none' : 'flex': 'none'; // Set the new value based on the screen width
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}
window.addEventListener('resize', function() {
    changeCSSProperty('hb', 'display');
});


// Change navbar background color on scroll
window.onscroll = function() {
    var navbar = document.getElementById("nav"); // Replace "navbar" with the ID of your navbar element
    if (window.pageYOffset > 0) { // Check if user has scrolled
      navbar.style.backgroundColor = "rgba(27, 14, 45, 1)"; // Replace "your-color" with your desired background color
    } else {
      navbar.style.backgroundColor = "transparent"; // Reset background color if user has scrolled back to the top of the page
    }
}
  

// Alert function
function alert1() {
    alert("Button Clicked");
}


// PopUp Window
function showPop(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var newValue = 'flex';

    element.style[propertyName] = newValue;
}
function closePop(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var newValue = 'none';

    element.style[propertyName] = newValue;
}