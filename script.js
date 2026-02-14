const messages = [
    "Segura?",
    "Realmente Segura?",
    "por nueve mesesitos",
    "Pero piensalo",
    "Tu quieres",
    "Pero piensatelo un momento",
    "No pienses en los pañales",
    "9 mesesitos, ojo",
    "anda, anda",
    "9 mesesitos sin eso"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}