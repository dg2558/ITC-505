document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    const resultDisplay = document.getElementById("result");

    generateBtn.addEventListener("click", function() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        resultDisplay.innerText = `Generated Number: ${randomNumber}. It's ${randomNumber % 2 === 0 ? 'even' : 'odd'}.`;
    });
});

function showContent(sectionId) {
    // Hide all sections
    const sections = ["home", "about", "contact"];
    sections.forEach(function(id) {
        document.getElementById(id).style.display = "none";
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}
