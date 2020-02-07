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
let io = socketIO(server)

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta applicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (mensaje) => {
        console.log(mensaje);
    });
});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

//Checar 
//http://localhost:3000/socket.io/socket.io.js