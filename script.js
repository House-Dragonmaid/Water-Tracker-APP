const button = document.getElementById('addButton');
const input = document.getElementById('waterInput');
let totalWater = 0;
button.addEventListener('click', () => {
    const waterAmount = parseFloat(input.value);
    console.log(`Button was clicked! Water amount: ${waterAmount}`);
    totalWater += waterAmount;
    console.log(`Total water amount: ${totalWater}`);
});