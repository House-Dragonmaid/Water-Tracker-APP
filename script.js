const button = document.getElementById('addButton');
const input = document.getElementById('waterInput');
button.addEventListener('click', () => {
    const waterAmount = input.value;
    console.log(`Button was clicked! Water amount: ${waterAmount}`);
});