const express = require('express');
const http = require('http');
const path = require('path');
const api = require('./routes')

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname, + '/dist/meme-app'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/meme-app/index.html'));
});

// API routes
app.use('/api', api);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on Port ${port}`))