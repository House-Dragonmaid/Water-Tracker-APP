const button = document.getElementById('addButton');
const input = document.getElementById('waterInput');

// Load the saved total, or use 0 if no value exists
let totalWater = Number(localStorage.getItem('totalWater')) || 0;

const totalWaterDisplay = document.getElementById('totalWater');

// Display the saved total when the page loads
totalWaterDisplay.textContent = `Total water intake: ${totalWater} Fluid Ounces`;

button.addEventListener('click', () => {
    const waterAmount = parseFloat(input.value);

    if (waterAmount <= 0 || isNaN(waterAmount)) {
        console.log('Please enter a valid number.');
    } else {
        totalWater += waterAmount;

        console.log(`Total water amount: ${totalWater}`);

        totalWaterDisplay.textContent =
            `Total water intake: ${totalWater} Fluid Ounces`;

        // Save the updated total
        localStorage.setItem('totalWater', totalWater);
    }
});
