document.addEventListener('DOMContentLoaded', function () {
    const typingString = "I hold a bachelor's degree in industrial design engineering from the Department of Mechanical Engineering at XJTU and have previously worked as a research assistant interested in lattice structure application for metal additive manufacturing mainly with the Laser Powder Bed Fusion process.";

    function typeText(element, text, currentIndex) {
        if (element && currentIndex < text.length) {
            element.textContent += text.charAt(currentIndex);
            setTimeout(() => typeText(element, text, currentIndex + 1), 50); // Adjust the typing speed by changing the timeout value
        }
    }

    typeText(document.getElementById("pToType"), typingString, 0);
});