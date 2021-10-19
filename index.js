let express = require('express');
let request = require('request');
let app = express();
let port = 5000;

app.get('/api/old', (req, res) => {
    res.send('This is my old API endpoint');
})

app.get('/api/new', (req, res) => {
    res.send('This is my new API endpoint');
})


app.get('/api/weatherOslo', (req, res) => {
    request.get("http://api.weatherstack.com/current?access_key=7538adbbc23113d2d7662bf8fe87af28&query=Olso", (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let weather = JSON.parse(body);
            let current_temperature = weather["current"]["temperature"];
            /* Send current_temperature as map {} */
            res.send({current_temperature});
        }
    })
})

app.listen(port, () => console.log('Listening on port ' + port));