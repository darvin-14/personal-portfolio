// Portfolio JavaScript

console.log("Portfolio loaded successfully");

// Download CV button
const buttons = document.querySelectorAll("button");
const downloadButton = buttons[0];
const themeButton = document.getElementById("themeButton");

downloadButton.addEventListener("click", function () {
    window.open("Darvin_Vargas_CV.pdf", "_blank");
});

// Dark mode button
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});