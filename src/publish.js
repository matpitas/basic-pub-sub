
const express = require('express');
const { publish } = require('./index');

const app = express();

app.use(express.json());

app.post('/channel1', (request, response) => {
    publish("channel1", request.body);
    response.json({ message: "Your message will be sent by Channel 1."});
})

app.post('/channel2', (request, response) => {
    publish("channel2", request.body);
    response.json({ message: "Your message will be sent by Channel 2."});
})

app.listen(3000);