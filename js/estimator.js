/* ==========================================================
   Wanderlust - Trip Cost Estimator
   File: estimator.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Estimator JS Loaded");

    /* ==========================================
       Get Elements
    ========================================== */

    const travelersInput = document.getElementById("travelers");
    const budgetInput = document.getElementById("budget");
    const daysInput = document.getElementById("days");

    const estimatedCost = document.getElementById("estimated-cost");
    const remainingBudget = document.getElementById("remaining-budget");
    const budgetStatus = document.getElementById("budget-status");



    /* ==========================================
       Cost Calculation
    ========================================== */

    function calculateTripCost() {

        const travelers = Number(travelersInput?.value) || 0;
        const budget = Number(budgetInput?.value) || 0;
        const days = Number(daysInput?.value) || 0;

        // Estimated cost per traveler per day
        const costPerPersonPerDay = 5000;

        const totalCost =
            travelers * days * costPerPersonPerDay;

        const remaining =
            budget - totalCost;

        if (estimatedCost) {
            estimatedCost.textContent = "₹" + totalCost;
        }

        if (remainingBudget) {
            remainingBudget.textContent = "₹" + remaining;
        }

        if (budgetStatus) {

            if (budget === 0 || travelers === 0 || days === 0) {

                budgetStatus.textContent =
                    "Enter all details to estimate.";

                budgetStatus.style.color = "gray";

            }

            else if (remaining >= 0) {

                budgetStatus.textContent =
                    "Your budget is sufficient.";

                budgetStatus.style.color = "green";

            }

            else {

                budgetStatus.textContent =
                    "Your budget is insufficient.";

                budgetStatus.style.color = "red";

            }

        }

    }



    /* ==========================================
       Live Calculation
    ========================================== */

    if (travelersInput) {
        travelersInput.addEventListener("input", calculateTripCost);
    }

    if (budgetInput) {
        budgetInput.addEventListener("input", calculateTripCost);
    }

    if (daysInput) {
        daysInput.addEventListener("input", calculateTripCost);
    }

    calculateTripCost();

});
