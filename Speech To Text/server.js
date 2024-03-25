const express = require('express');
const app = express();
const fs = require('fs');

app.get('*', (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error loading index.html');
        }
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});