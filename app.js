require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

server.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', () => console.dir(`Servidor Iniciado: http://${process.env.HOST}:${process.env.PORT}`));