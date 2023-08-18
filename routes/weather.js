const express = require("express");
const https = require('https')

const weatherRoute = express.Router();
weatherRoute.get("/", (req, res)=>{
    res.sendFile(__dirname, + "index.html")   
})

weatherRoute.post("/", (req, res)=>{
        const city = req.body.cityName
        const appiKey = "495ac44c66104ba9bce62b82b3283064" 
        const unit = "imperial"
        const lat = 40.4406
        const lon = -79.9959
        //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
        //https://api.openweathermap.org/data/3.0/onecall?lat=40.4406&lon=-79.9959&appid=495ac44c66104ba9bce62b82b3283064&units=imperial
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appiKey}&units=${unit}`
        https.get(url, (response)=>{
            response.on("data", (chunk)=>{
                //const responseData = JSON.parse(chunk);
                res.write(chunk);
                // const temperature = responseData.current.temp;
                // const weatherDes = responseData.current.weather[0].description;
                // const icon = responseData.current.weather[0].icon;
                // const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
                // res.write(`&lt;h1&gt;The weather is ${temperature} degree Fahrenheit in Pittsburgh and the description is ${weatherDes} &lt;/h1&gt;`)
                // res.write("&lt;img src="+ imageURL +"&gt;")
                res.send()
            })
        })
})
module.exports = weatherRoute