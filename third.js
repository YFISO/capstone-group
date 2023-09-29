// JavaScript function to generate a PDF when the "Study" button is clicked
function generatePDF() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("3D Printing Study", 10, 10); // Replace with your content

    // Save the PDF as "3d_printing_study.pdf"
    doc.save("3d_printing_study.pdf");
}

// Add a click event listener to the "Study" button
const studyButton = document.getElementById('studyButton');

if (studyButton) {
    studyButton.addEventListener('click', generatePDF);
}
