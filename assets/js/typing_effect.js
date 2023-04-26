document.addEventListener('DOMContentLoaded', function () {
    const elementsToType = [
        { id: 'firstTyping', text: "Welcome to Yalou Han's" },
        { id: 'secondTyping', text: 'DESIGN SHOW' },
        { id: 'thirdTyping', text: 'currently a master student' },
        { id: 'fourthTyping', text: '@idecourse' },
    ];

    function typeText(element, text, currentIndex) {
        if (element && currentIndex < text.length) {
            element.textContent += text.charAt(currentIndex);
            setTimeout(() => typeText(element, text, currentIndex + 1), 100); // Adjust the typing speed by changing the timeout value
        }
    }

    elementsToType.forEach(item => {
        const element = document.getElementById(item.id);
        typeText(element, item.text, 0);
    });
});
