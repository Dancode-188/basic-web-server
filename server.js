const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/hello", async (req, res) => {
  try {
    const visitorName = req.query.visitor_name || "Guest";
    const clientIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    let city;

    // Check for local or reserved IP addresses
    if (clientIp === "::1" || clientIp === "127.0.0.1") {
      return res
        .status(400)
        .json({ error: "Cannot determine location for local IP address" });
    } else {
      // Make a request to the geolocation API to get the city based on the IP
      const geoResponse = await axios.get(`https://ipapi.co/${clientIp}/json/`);

      if (geoResponse.data.error) {
        return res
          .status(400)
          .json({ error: "Invalid IP address or geolocation service error" });
      }

      city = geoResponse.data.city;

      // Log the geolocation response for debugging
      console.log("Geolocation response:", geoResponse.data);

      if (!city) {
        return res
          .status(400)
          .json({ error: "City not found for the provided IP address" });
      }
    }

    // Make a request to the weather API to get the temperature for the city
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
    );

    if (weatherResponse.data.cod !== 200) {
      return res
        .status(400)
        .json({ error: "Weather information could not be retrieved" });
    }

    const temperature = Math.round(weatherResponse.data.main.temp);

    // Log the weather API response for debugging
    console.log("Weather API response:", weatherResponse.data);

    const response = {
      client_ip: clientIp,
      location: city,
      greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`,
    };

    res.json(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
