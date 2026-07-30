/* ==========================================================
   Wanderlust - Planner Form
   File: planner.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Planner JS Loaded");

    /* ==========================================
       Form Elements
    ========================================== */

    const plannerForm = document.getElementById("planner-form");

    if (!plannerForm) return;

    const destination = document.getElementById("destination");
    const email = document.getElementById("email");
    const travelers = document.getElementById("travelers");
    const budget = document.getElementById("budget");
    const days = document.getElementById("days");
    const startDate = document.getElementById("start-date");
    const endDate = document.getElementById("end-date");

    const message = document.getElementById("form-message");
    const summary = document.getElementById("trip-summary");



    /* ==========================================
       Email Validation
    ========================================== */

    function isValidEmail(emailAddress){

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(emailAddress);

    }



    /* ==========================================
       Form Submission
    ========================================== */

    plannerForm.addEventListener("submit", function(e){

        e.preventDefault();

        message.textContent = "";
        summary.innerHTML = "";



        /* Destination */

        if(destination.value.trim() === ""){

            showError("Please enter a destination.");

            destination.focus();

            return;

        }



        /* Email */

        if(email.value.trim() === ""){

            showError("Email is required.");

            email.focus();

            return;

        }

        if(!isValidEmail(email.value.trim())){

            showError("Please enter a valid email address.");

            email.focus();

            return;

        }



        /* Travelers */

        if(Number(travelers.value) < 1){

            showError("Number of travelers must be at least 1.");

            travelers.focus();

            return;

        }



        /* Budget */

        if(Number(budget.value) <= 0){

            showError("Enter a valid budget.");

            budget.focus();

            return;

        }



        /* Days */

        if(Number(days.value) < 1){

            showError("Enter number of travel days.");

            days.focus();

            return;

        }



        /* Dates */

        if(startDate.value === "" || endDate.value === ""){

            showError("Please select travel dates.");

            return;

        }

        if(new Date(endDate.value) < new Date(startDate.value)){

            showError("End date must be after the start date.");

            return;

        }



        /* Success */

        message.textContent = "🎉 Trip Planned Successfully!";

        message.style.color = "green";



        /* Trip Summary */

        const estimatedCost =
        Number(travelers.value) *
        Number(days.value) *
        5000;

        summary.innerHTML = `

        <div class="summary-card">

            <h2>Trip Summary</h2>

            <p><strong>Destination:</strong> ${destination.value}</p>

            <p><strong>Email:</strong> ${email.value}</p>

            <p><strong>Travelers:</strong> ${travelers.value}</p>

            <p><strong>Travel Days:</strong> ${days.value}</p>

            <p><strong>Budget:</strong> ₹${budget.value}</p>

            <p><strong>Estimated Cost:</strong> ₹${estimatedCost}</p>

            <p><strong>Start Date:</strong> ${startDate.value}</p>

            <p><strong>End Date:</strong> ${endDate.value}</p>

        </div>

        `;

        plannerForm.reset();

    });



    /* ==========================================
       Error Function
    ========================================== */

    function showError(text){

        message.textContent = text;

        message.style.color = "red";

    }

});
