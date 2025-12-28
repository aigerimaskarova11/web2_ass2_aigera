Weather & News App
Project Overview

This is a simple web app that shows real-time weather and local news for a selected city. All API calls happen on the server, so API keys stay safe. The app is responsive and works on both mobile and desktop.
Setup Instructions

Install dependencies:

npm install


Create a .env file in the root folder and add your API keys:

OPENWEATHER_API_KEY=your_openweather_key
NEWS_API_KEY=your_newsapi_key


Start the server:

node server.js


Open your browser and go to:

http://localhost:3000

API Usage
1. OpenWeather API

Used to get real-time weather data for a city.

Server fetches:

Temperature & feels-like temperature

Weather description

Coordinates

Wind speed

Country code

Rain volume (last 3 hours)

2. News API

Used to fetch local news for the selected city.

Server fetches headlines and description, sends to frontend.

All API calls are done on the server-side only for security.

Key Design Decisions

Server-side API calls: Keeps API keys hidden and secure.

Clean code: Easy to read, modular, and organized.

Responsive UI: Works well on desktop and mobile using simple CSS media queries.

JSON response: Server sends structured data for frontend to display easily.
