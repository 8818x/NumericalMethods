const express = require('express');
const app = express();
const port = 4000; 
const data = require('./server/fakeserver.json'); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/input', (req, res) => {
    res.json(data.input);
});

app.get('/data', (req, res) => {
    res.json(data.data);
});

app.get('/input', (req, res) => {
    res.json(data.input);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
