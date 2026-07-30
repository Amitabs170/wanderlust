/* ==========================================================
   Wanderlust - Destinations Page
   File: destinations.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Destinations JS Loaded");

    const destinationCards =
        document.querySelectorAll(".destination-card");

    const favouriteButtons =
        document.querySelectorAll(".favorite-btn");

    const detailsButtons =
        document.querySelectorAll(".details-btn");

    const destinationCount =
        document.getElementById("destination-count");



    /* ==========================================
       Favourite Button
    ========================================== */

    favouriteButtons.forEach(button => {

        button.addEventListener("click", function (e) {

            e.stopPropagation();

            button.classList.toggle("liked");

            if (button.classList.contains("liked")) {

                button.innerHTML = "❤️";

                button.title = "Remove from favourites";

            }

            else {

                button.innerHTML = "🤍";

                button.title = "Add to favourites";

            }

        });

    });



    /* ==========================================
       Destination Card Click
    ========================================== */

    destinationCards.forEach(card => {

        card.addEventListener("click", () => {

            const destination =
                card.dataset.destination;

            if(destination){

                window.location.href =
                `destination.html?place=${destination}`;

            }

            else{

                window.location.href =
                "destination.html";

            }

        });

    });



    /* ==========================================
       View Details Button
    ========================================== */

    detailsButtons.forEach(button => {

        button.addEventListener("click", function(e){

            e.stopPropagation();

            const destination =
            button.dataset.destination;

            if(destination){

                window.location.href =
                `destination.html?place=${destination}`;

            }

            else{

                window.location.href =
                "destination.html";

            }

        });

    });



    /* ==========================================
       Hover Effect
    ========================================== */

    destinationCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "translateY(-8px)";

            card.style.transition =
            "0.3s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "translateY(0)";

        });

    });



    /* ==========================================
       Destination Counter
    ========================================== */

    if(destinationCount){

        destinationCount.textContent =
        destinationCards.length;

    }



    console.log("Destination interactions ready.");

});
