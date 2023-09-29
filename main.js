// Get the modals
var qualityModal = document.getElementById("printingQualityModal");
var propertiesModal = document.getElementById("printPropertiesModal");

// Get the buttons that open the modals
var qualityButton = document.getElementById("printQualityButton");
var propertiesButton = document.getElementById("printPropertiesButton");

// Get the "NEW" buttons inside the modals
var newButtonQuality = document.getElementById("newButtonQuality");
var newButtonProperties = document.getElementById("newButtonProperties");

// Get the <span> elements that close the modals
var closeQualityModal = document.getElementById("closeQualityModal");
var closePropertiesModal = document.getElementById("closePropertiesModal");

// Variables to track whether the "NEW" buttons were clicked once
var newButtonClickedQuality = false;
var newButtonClickedProperties = false;

// Function to close the modal and reset the flag
function closeAndResetModal(modal, flag) {
    modal.style.display = "none";
    flag = false; // Reset the flag
}

// Event listeners for opening modals
qualityButton.addEventListener("click", function() {
    qualityModal.style.display = "block";
    
    // Add content to the quality modal dynamically
    var qualityModalContent = document.getElementById("qualityModalContent");
    qualityModalContent.innerHTML = `
        Here you can find information about configuring printing quality:
        <ul>
            <li>Set the resolution for high-quality printing.</li>
            <li>Choose the paper type and size.</li>
            <li>Adjust color settings for optimal results.</li>
        </ul>`;
});

propertiesButton.addEventListener("click", function() {
    propertiesModal.style.display = "block";
    
    // Add content to the properties modal dynamically
    var propertiesModalContent = document.getElementById("propertiesModalContent");
    propertiesModalContent.innerHTML = `
        Here you can find information about configuring print properties:
        <ul>
            <li>Set the paper orientation.</li>
            <li>Choose the number of copies.</li>
            <li>Adjust page margins and layout.</li>
        </ul>`;
});

// Event listeners for closing modals
closeQualityModal.addEventListener("click", function() {
    closeAndResetModal(qualityModal, newButtonClickedQuality);
});

closePropertiesModal.addEventListener("click", function() {
    closeAndResetModal(propertiesModal, newButtonClickedProperties);
});

// Event listener for the "NEW" button inside the quality modal
newButtonQuality.addEventListener("click", function() {
    if (newButtonClickedQuality) {
        closeAndResetModal(qualityModal, newButtonClickedQuality);
    } else {
        newButtonClickedQuality = true;
    }
});

// Event listener for the "NEW" button inside the properties modal
newButtonProperties.addEventListener("click", function() {
    if (newButtonClickedProperties) {
        closeAndResetModal(propertiesModal, newButtonClickedProperties);
    } else {
        newButtonClickedProperties = true;
    }
});

// Event listeners for clicking outside the modals
window.addEventListener("click", function(event) {
    if (event.target == qualityModal) {
        closeAndResetModal(qualityModal, newButtonClickedQuality);
    }
    if (event.target == propertiesModal) {
        closeAndResetModal(propertiesModal, newButtonClickedProperties);
    }
});
// Access previous files when the "File" button is clicked
 document.getElementById('uploadButton').addEventListener('click', function () {
    // Access previous files here and perform any necessary actions
    alert('Accessing previous files...');
    // You can add more code here to handle accessing previous files.
});

// VISSIBILITY OF TOGGLE SECTION
        // JavaScript function to toggle the visibility of sections
        function toggleSection(sectionId) {
            var section = document.getElementById(sectionId);
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
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


// Secod screen Monitior
// JavaScript function to load and display raw images
function loadRawImages() {
    // Get the container element for displaying images
    var imageContainer = document.getElementById('imageContainer');

    if (!imageContainer) {
        console.error("Image container not found.");
        return;
    }

    // Clear any previously displayed images
    imageContainer.innerHTML = '';

    // Create an image element
    var img = document.createElement('img');

    // Set the source (URL) of your raw image
   img.src="train/Warping/img_045.jpeg"; // Replace with the actual image path

    // Set optional attributes like alt text, width, and height
    img.alt = 'Raw Image';
    img.width = 400; // Adjust the width as needed
    img.height = 300; // Adjust the height as needed

    // Append the image to the container
    imageContainer.appendChild(img);
}

// Add a click event listener to the "Raw Images" button
var rawImagesButton = document.getElementById('rawImagesButton');

if (rawImagesButton) {
    rawImagesButton.addEventListener('click', loadRawImages);
} else {
    console.error("Raw Images button not found.");
}
// JavaScript function to navigate to the 'third.html' page
function goToThirdPage() {
    // Specify the URL of the 'third.html' page
    var thirdPageURL = 'third.html';

    // Redirect to the 'third.html' page
    window.location.href = thirdPageURL;
}

// Add a click event listener to the button
var goToThirdPageButton = document.getElementById('goToThirdPageButton');

if (goToThirdPageButton) {
    goToThirdPageButton.addEventListener('click', goToThirdPage);
}

