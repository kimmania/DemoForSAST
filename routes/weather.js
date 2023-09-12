const express = require("express");
const https = require('https')

const weatherRoute = express.Router();
weatherRoute.get("/", (req, res) => {
    res.sendFile(__dirname, + "index.html")
})

weatherRoute.post("/", (req, res) => {
    const city = req.body.cityName
    const unit = "imperial"
    //undocumented API that allows searching by city, documentation points to the 3.0
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${fillin}&units=${unit}`
    https.get(url, (response) => {
        let body = "";

        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            try {
                let json = JSON.parse(JSON.stringify(body));
                const temperature = json.main.temp;
                // const weatherDes = "test";//json.weather[0].description;
                // const icon = json.weather[0].icon;
                // const cityName = json.name;
                // const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                // res.write(`<h1>The weather is ${temperature} degree Fahrenheit in ${cityName} and the description is ${weatherDes} </h1>`)
                // res.write("&lt;img src=" + imageURL + "&gt;")
                res.write(json);
                res.send();
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
})
module.exports = weatherRoute