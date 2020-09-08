const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User connected.');
    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to server!'
    });

    client.on('disconnect', () => {
        console.log('User disconnected.');
    });

    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        // if (message.user) {
        //     callback({
        //         response: 'All ok!'
        //     });
        // } else {
        //     callback({
        //         response: 'All fail!!'
        //     });
        // }
    });
});