# Wanderlust

Wanderlust is a modern, interactive travel website designed to help users discover dream destinations, explore travel ideas, and plan a trip with ease. The project brings together destination discovery, travel inspiration, trip planning, budget estimation, and live weather information in one simple and visually appealing experience.

This project is built as a front-end web application, which means it runs entirely in the browser without needing a database or backend server. All destination information is loaded dynamically from a JSON file, making the website easy to update and expand.

---

## What is this project?

Wanderlust is a travel experience website that allows visitors to:

- browse featured destinations
- explore destination details
- filter destinations by budget and type
- search for places by name or country
- view travel-related information such as currency, language, stay duration, and best travel time
- use a trip planner to organize travel details
- estimate trip costs based on travel preferences
- check live weather information for selected destinations

In simple terms, it is a complete travel inspiration and planning website for people who want to discover places and prepare for their next journey.

---

## Why this project matters

Travel planning can feel overwhelming because users often need to gather information from many different places. Wanderlust solves that by bringing the most important travel details into one interface:

- where to go
- what the destination is like
- how much it may cost
- how long to stay
- what the weather might be like
- how to plan a trip more confidently

This makes the project useful for both beginners and travelers who want a quick, polished planning experience.

---

## Main Features

### 1. Home Page
The home page acts as the welcome screen for the website. It introduces the brand, highlights featured destinations, and encourages users to explore the site further.

### 2. Destination Explorer
Users can browse destinations from a central listing page. Each destination card includes:
- destination name
- country
- description
- price
- travel category
- budget level

### 3. Search and Filters
The destination page includes search and filter options so users can quickly narrow down the list based on:
- budget
- destination type
- search keywords

This makes the browsing experience more intuitive and user-friendly.

### 4. Destination Detail Page
Each destination has its own detail page where users can view:
- a detailed description
- travel highlights
- attractions
- itinerary ideas
- travel information such as currency and language
- live weather data

### 5. Trip Planner
The planner page allows users to enter trip details such as:
- traveller name
- destination
- travel dates
- number of travellers
- transport preference
- accommodation type

Once submitted, the planner shows a trip summary so the user can review the plan clearly.

### 6. Budget Estimator
Users can estimate travel costs by entering values for:
- transport cost
- accommodation cost
- food budget
- activity budget

The page then calculates and displays the total estimated budget for all travellers.

### 7. Live Weather Integration
The website uses the Open-Meteo weather API to show live weather information for selected destinations. This adds a practical travel-planning feature and improves the overall experience.

---

## How the Project Works

Wanderlust is a front-end project that works in a simple and clear way:

1. The website loads its main pages such as Home, Destinations, Details, and Planner.
2. Destination data is stored in a JSON file.
3. JavaScript fetches the data from the JSON file and dynamically renders content on the page.
4. Users interact with the UI using filters, search, buttons, and forms.
5. The destination detail page uses the selected destination ID to display the correct information.
6. The weather section fetches live data from the Open-Meteo API.
7. The trip planner and budget estimator collect user input and display helpful summaries and totals.

Because the project is client-side, there is no backend logic or database required.

---

## Tech Stack

### Frontend
- HTML5 for page structure
- CSS3 for styling and layout
- JavaScript for interactivity and dynamic content

### Data
- JSON for destination content and travel details

### APIs
- Open-Meteo API for weather data

### Tools
- VS Code for development
- Git and GitHub for version control

---

## Project Structure

The project is organized into simple folders for easy navigation:

- index.html
  - Home page

- destinations.html
  - Destination listing page

- destination.html
  - Destination detail page

- planner.html
  - Trip planner and budget estimator page

- css/
  - all stylesheets for different pages and components

- js/
  - app.js
  - destinations.js
  - detail.js
  - estimator.js
  - filters.js
  - planner.js
  - weather.js

- data/
  - destinations.json

This structure keeps the project manageable and easy to understand.

---

## Pages Overview

### Home Page
The landing page gives users a first impression of the brand and highlights featured destinations.

### Destinations Page
This page helps users browse and filter through available travel options.

### Destination Detail Page
This page gives richer information about one specific destination.

### Trip Planner Page
This page helps users plan and organize travel details and estimate costs.

---

## How to Run the Project Locally

Because this is a static website, you can run it easily on your machine.

### Option 1: Open directly in a browser
You can open the HTML files directly in a browser, but for the best experience and smoother loading of data, it is recommended to use a local server.

### Option 2: Use a simple local server
If you have Python installed, run:

```bash
python -m http.server 8000