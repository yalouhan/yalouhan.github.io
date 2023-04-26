document.addEventListener('DOMContentLoaded', function(){
    const elementsTotype = [
        {id: 'firstTyping', Text: "Welcome to Yalou Han's"},
        {id: 'secondTyping', Text: "DESIGN SHOW"},
        {id: 'thirdTyping', Text: "currently a master student"},
        {id: 'fourthTyping', Text: "@idecourse"},
    ]

    function typeText(element, text, currentIndex){
        if(currentIndex < text.length){
            element.textContent += text.charAt(currentIndex);
            setTimeout(() => typeText(element, text, currentIndex + 1), 100);// Adjust the typing speed by changing the timeout value
        }
    }

    elementsTotype.forEach(item =>{
        const element = document.getElementById(item.id);
        typeText(element, item.text, 0);
    });
})