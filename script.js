document.addEventListener('DOMContentLoaded', () => {
    // Constants & Configuration
    const TANK_CAPACITY = 54;
    const CONDITIONS = {
        city: { consumption: 9.5, maxRange: 568 },
        mixed: { consumption: 8.0, maxRange: 675 },
        highway: { consumption: 7.0, maxRange: 770 }
    };

    let activeMode = 'refill'; // 'refill' or 'trip'

    // DOM Elements - Inputs
    const distanceInput = document.getElementById('distance');
    const tripBudgetInput = document.getElementById('trip-budget');
    const priceInput = document.getElementById('price');
    const conditionSelect = document.getElementById('condition');
    
    // DOM Elements - UI Components
    const modeBtns = document.querySelectorAll('.mode-btn');
    const primaryLabel = document.getElementById('primary-label');
    const inputTripCostGroup = document.getElementById('input-trip-cost');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const errorMessage = document.getElementById('error-message');
    const resultSection = document.getElementById('result-section');

    // DOM Elements - Results
    const fuelNeededResult = document.getElementById('fuel-needed-result');
    const fuelCostResult = document.getElementById('fuel-cost-result');
    const rangeAddedResult = document.getElementById('range-added-result');
    const newRangeResult = document.getElementById('new-range-result');
    const labelLiters = document.getElementById('label-liters');
    const labelCost = document.getElementById('label-cost');
    
    // Cards for hiding/showing
    const cardRangeAdded = document.getElementById('card-range-added');
    const cardTotalRange = document.getElementById('card-total-range');

    // --- Mode Switching ---
    const switchMode = (newMode) => {
        activeMode = newMode;
        
        // Update Buttons
        modeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === activeMode);
        });

        // Reset inputs and hide results
        resetCalculator();

        if (activeMode === 'refill') {
            primaryLabel.textContent = 'Current Dashboard Range (KM)';
            distanceInput.placeholder = 'e.g., 250';
            inputTripCostGroup.hidden = true;
            
            labelLiters.textContent = 'Liters to Fill';
            labelCost.textContent = 'Cost to Fill';
            cardRangeAdded.style.display = 'flex';
            cardTotalRange.style.display = 'flex';
        } else {
            primaryLabel.textContent = 'Trip Distance (KM)';
            distanceInput.placeholder = 'e.g., 100';
            inputTripCostGroup.hidden = false;
            
            labelLiters.textContent = 'Fuel Needed';
            labelCost.textContent = 'Trip Cost / Distance';
            cardRangeAdded.style.display = 'none';
            cardTotalRange.style.display = 'none';
        }
    };

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });

    // --- Calculation Logic ---
    const calculateFuelInfo = () => {
        const distance = parseFloat(distanceInput.value) || 0;
        const budget = parseFloat(tripBudgetInput.value) || 0;
        const price = parseFloat(priceInput.value);
        const condition = CONDITIONS[conditionSelect.value];

        // Basic Validation
        if (isNaN(price) || price <= 0) {
            errorMessage.textContent = 'Please enter a valid fuel price';
            resultSection.hidden = true;
            return;
        }

        errorMessage.textContent = '';
        let fuelNeeded, fuelCost, rangeAdded, totalRange, secondaryValue, secondaryUnit;

        if (activeMode === 'refill') {
            if (distance > condition.maxRange) {
                errorMessage.textContent = `Range cannot exceed ${condition.maxRange}km`;
                resultSection.hidden = true;
                return;
            }
            rangeAdded = condition.maxRange - distance;
            fuelNeeded = (rangeAdded * condition.consumption) / 100;
            fuelCost = fuelNeeded * price;
            totalRange = condition.maxRange;

            secondaryValue = fuelCost.toFixed(2);
            secondaryUnit = 'EGP';
        } else {
            // Trip Mode
            if (distance > 0) {
                // Distance to Cost
                fuelNeeded = (distance * condition.consumption) / 100;
                fuelCost = fuelNeeded * price;
                
                secondaryValue = fuelCost.toFixed(2);
                secondaryUnit = 'EGP';
            } else if (budget > 0) {
                // Budget to Distance
                fuelNeeded = budget / price;
                const achievableDistance = (fuelNeeded * 100) / condition.consumption;
                
                secondaryValue = Math.round(achievableDistance);
                secondaryUnit = 'KM';
                fuelCost = budget; // just for consistency
            } else {
                errorMessage.textContent = 'Enter distance or budget';
                resultSection.hidden = true;
                return;
            }
        }

        // Display results
        fuelNeededResult.innerHTML = `${fuelNeeded.toFixed(2)} <span class="unit">Liters</span>`;
        fuelCostResult.innerHTML = `${secondaryValue} <span class="unit">${secondaryUnit}</span>`;
        
        if (activeMode === 'refill') {
            rangeAddedResult.innerHTML = `${Math.round(rangeAdded)} <span class="unit">KM</span>`;
            newRangeResult.innerHTML = `${totalRange} <span class="unit">KM</span>`;
        }
        
        // Animation
        resultSection.hidden = false;
        resultSection.style.animation = 'none';
        resultSection.offsetHeight; 
        resultSection.style.animation = null;
    };

    const resetCalculator = () => {
        distanceInput.value = '';
        tripBudgetInput.value = '';
        priceInput.value = '';
        errorMessage.textContent = '';
        resultSection.hidden = true;
    };

    calculateBtn.addEventListener('click', calculateFuelInfo);
    resetBtn.addEventListener('click', resetCalculator);

    // Enter key support
    [distanceInput, priceInput, tripBudgetInput, conditionSelect].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') calculateFuelInfo();
        });
    });

    // Clear distance if budget typed, and vice versa in trip mode
    tripBudgetInput.addEventListener('input', () => { if(activeMode === 'trip') distanceInput.value = ''; });
    distanceInput.addEventListener('input', () => { if(activeMode === 'trip') tripBudgetInput.value = ''; });
});
