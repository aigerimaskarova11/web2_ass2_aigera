require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const NEWS_API = "https://newsapi.org/v2/top-headlines";

app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: "City is required" });

    const weatherResponse = await axios.get(WEATHER_API, {
      params: {
        q: city,
        appid: process.env.OPENWEATHER_API_KEY,
        units: "metric"
      }
    });

    const data = weatherResponse.data;

    const weatherData = {
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      coordinates: data.coord,
      wind_speed: data.wind.speed,
      country_code: data.sys.country,
      rain_last_3h: data.rain ? data.rain["3h"] : 0
    };

    const newsResponse = await axios.get(NEWS_API, {
      params: {
        q: data.sys.country,
        apiKey: process.env.NEWS_API_KEY,
        pageSize: 3
      }
    });

    res.json({
      weather: weatherData,
      news: newsResponse.data.articles.map(article => ({
        title: article.title,
        url: article.url
      }))
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
