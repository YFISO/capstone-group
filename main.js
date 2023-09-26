 // Access previous files when the "File" button is clicked
 document.getElementById('uploadButton').addEventListener('click', function () {
    // Access previous files here and perform any necessary actions
    alert('Accessing previous files...');
    // You can add more code here to handle accessing previous files.
});

// Handle Print Quality button click
document.getElementById('printQualityButton').addEventListener('click', function () {
    // Implement functionality for the Print Quality button here
    alert('Clicked Print Quality button. Implement your logic here.');
    // You can add more code here to handle print quality settings or actions.
});

// Handle Print Properties button click
document.getElementById('printPropertiesButton').addEventListener('click', function () {
    // Implement functionality for the Print Properties button here
    alert('Clicked Print Properties button. Implement your logic here.');
    // You can add more code here to handle print properties or actions.
});

// Handle Report button click
document.getElementById('reportButton').addEventListener('click', function () {
    // Implement functionality for the Report button here
    alert('Clicked Report button. Implement your logic here.');
    // You can add more code here to generate or display a report.
});

// Handle Minimize button click
document.getElementById('minimizeButton').addEventListener('click', function () {
    // Implement functionality for the Minimize button here
    alert('Clicked Minimize button. Implement your logic here.');
    // You can add more code here to minimize or hide the dashboard section.
});

// Handle Maximize button click
document.getElementById('maximizeButton').addEventListener('click', function () {
    // Implement functionality for the Maximize button here
    alert('Clicked Maximize button. Implement your logic here.');
    // You can add more code here to maximize or expand the dashboard section.
});


// Select the input element with the id "fileInput"
const image_input = document.querySelector("#fileInput");

// Initialize a variable to store the uploaded image data
var uploaded_image = "";

// Add an event listener to the file input
image_input.addEventListener("change", function () {
  // Create a new FileReader object to read the selected file
  const reader = new FileReader();

  // Add an event listener to the FileReader to handle when the file is loaded
  reader.addEventListener("load", () => {
    // Store the result of reading the file in the uploaded_image variable
    uploaded_image = reader.result;

    // Select the element with the id "display_image" and set its background image
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;

    // Show the "display_image" div by setting its display property to "block"
    display_image.style.display = "block"; // Show the div when an image is uploaded
  });

  // Read the selected file as a Data URL (base64-encoded image data)
  reader.readAsDataURL(this.files[0]);
});
