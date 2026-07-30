/* ==========================================================
   Wanderlust - Destination Filters
   File: filters.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Filters JS Loaded");

    const searchInput = document.getElementById("search-input");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const resetButton = document.getElementById("reset-filter");
    const destinationCards = document.querySelectorAll(".destination-card");
    const noResults = document.getElementById("no-results");

    let currentCategory = "all";

    /* ==========================================
       Filter Destinations
    ========================================== */

    function filterDestinations() {

        const searchText = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        let visibleCount = 0;

        destinationCards.forEach(card => {

            const destinationName =
                card.querySelector("h3").textContent.toLowerCase();

            const category =
                card.dataset.category.toLowerCase();

            const matchesSearch =
                destinationName.includes(searchText);

            const matchesCategory =
                currentCategory === "all" ||
                category === currentCategory;

            if (matchesSearch && matchesCategory) {

                card.style.display = "block";
                visibleCount++;

            }

            else {

                card.style.display = "none";

            }

        });

        if (noResults) {

            if (visibleCount === 0) {

                noResults.style.display = "block";

            }

            else {

                noResults.style.display = "none";

            }

        }

    }

    /* ==========================================
       Search
    ========================================== */

    if (searchInput) {

        searchInput.addEventListener("keyup", filterDestinations);

    }

    /* ==========================================
       Category Buttons
    ========================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active"));

            button.classList.add("active");

            currentCategory =
                button.dataset.category.toLowerCase();

            filterDestinations();

        });

    });

    /* ==========================================
       Reset Filters
    ========================================== */

    if (resetButton) {

        resetButton.addEventListener("click", () => {

            currentCategory = "all";

            if (searchInput) {

                searchInput.value = "";

            }

            filterButtons.forEach(btn =>
                btn.classList.remove("active"));

            const allButton =
                document.querySelector(
                    '.filter-btn[data-category="all"]'
                );

            if (allButton) {

                allButton.classList.add("active");

            }

            filterDestinations();

        });

    }

    /* ==========================================
       Initial Filter
    ========================================== */

    filterDestinations();

});
