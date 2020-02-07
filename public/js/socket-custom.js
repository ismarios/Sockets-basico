    let socket = io();

    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });

    //Escuchar
    socket.on('disconnect', function() {
        console.log('Perdimos conexión con el servidor');
    })

    //Enviar información
    socket.emit('enviarMensaje', {
        usuario: 'Ismael',
        mensaje: 'Hola mundo'
    }, function(respuesta) {
        console.log('Respuesta server: ', respuesta);
    });

    // Escuchar información
    socket.on('enviarMensaje', (mensaje) => {
        console.log(mensaje);
    });