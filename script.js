document.addEventListener('DOMContentLoaded', () => {
    // Constants
    const TANK_CAPACITY = 54;
    const FUEL_CONSUMPTION = 8.7;
    const MAX_RANGE = 600;

    // DOM Elements
    const distanceInput = document.getElementById('distance');
    const priceInput = document.getElementById('price');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const errorMessage = document.getElementById('error-message');
    const resultSection = document.getElementById('result-section');
    const fuelNeededResult = document.getElementById('fuel-needed-result');
    const fuelCostResult = document.getElementById('fuel-cost-result');
    const rangeAddedResult = document.getElementById('range-added-result');
    const newRangeResult = document.getElementById('new-range-result');

    // Validation Rules
    const validateInputs = (distance, price) => {
        if (isNaN(distance) || isNaN(price) || distanceInput.value.trim() === '' || priceInput.value.trim() === '') {
            return 'Please enter valid numerical values';
        }
        if (distance < 0) {
            return 'Distance cannot be negative';
        }
        if (price <= 0) {
            return 'Fuel price must be greater than zero';
        }
        if (distance > MAX_RANGE) {
            return `Distance cannot exceed vehicle maximum range (${MAX_RANGE}km)`;
        }
        return null; // Valid
    };

    // Calculation Function
    const calculateFuelInfo = () => {
        const distance = parseFloat(distanceInput.value);
        const price = parseFloat(priceInput.value);

        const error = validateInputs(distance, price);
        if (error) {
            errorMessage.textContent = error;
            resultSection.hidden = true;
            return;
        }

        // Clear previous error
        errorMessage.textContent = '';

        // Calculate
        const missingRange = MAX_RANGE - distance;
        const fuelNeeded = (missingRange * FUEL_CONSUMPTION) / 100;
        const fuelCost = fuelNeeded * price;

        // Display results with animation reset
        fuelNeededResult.innerHTML = `${fuelNeeded.toFixed(2)} <span class="unit">Liters</span>`;
        fuelCostResult.innerHTML = `${fuelCost.toFixed(2)} <span class="unit">EGP</span>`;
        if (rangeAddedResult) {
            rangeAddedResult.innerHTML = `${missingRange} <span class="unit">KM</span>`;
        }
        if (newRangeResult) {
            newRangeResult.innerHTML = `${MAX_RANGE} <span class="unit">KM</span>`;
        }
        
        // Retrigger CSS animation
        resultSection.hidden = false;
        resultSection.style.animation = 'none';
        resultSection.offsetHeight; // trigger reflow
        resultSection.style.animation = null;
    };

    // Reset Function
    const resetCalculator = () => {
        distanceInput.value = '';
        priceInput.value = '';
        errorMessage.textContent = '';
        resultSection.hidden = true;
        distanceInput.focus();
    };

    // Event Listeners
    calculateBtn.addEventListener('click', calculateFuelInfo);
    resetBtn.addEventListener('click', resetCalculator);

    // Allow 'Enter' key to trigger calculation
    [distanceInput, priceInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateFuelInfo();
            }
        });
    });
});
