const express = require('express');
const socketIO = require('socket.io')
const http = require('http')

const path = require('path');

const app = express();
//Definir el servidor para correr la app para que funcione con express
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Inicializar Socket IO para mantener una conexión con el server
module.exports.io = socketIO(server)
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

//Checar 
//http://localhost:3000/socket.io/socket.io.js