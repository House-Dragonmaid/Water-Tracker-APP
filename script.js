const button = document.getElementById('addButton');
const input = document.getElementById('waterInput');
let totalWater = 0;
localStorage.setItem('totalWater', totalWater);
const totalWaterDisplay = document.getElementById('totalWater');

button.addEventListener('click', () => {
    const waterAmount = parseFloat(input.value);
    if (waterAmount <= 0 || isNaN(waterAmount)) {
        console.log('Please enter a valid number.');
    } else {
        console.log(`Button was clicked! Water amount: ${waterAmount}`);
        totalWater += waterAmount;
        console.log(`Total water amount: ${totalWater}`);
        totalWaterDisplay.textContent = `Total water intake: ${totalWater} Fluid Ounces`;
        localStorage.setItem('totalWater', totalWater);
    }
});