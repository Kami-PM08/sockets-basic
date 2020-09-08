var socket = io();

socket.on('connect', function() {
    console.log('Connected to server.');
});
socket.on('disconnect', function() {
    console.log('Server disconnected.');
});

// socket.emit('sendMessage', {
//     user: 'Cristian',
//     message: 'Hello world!'
// }, function(response) {
//     console.log('Server response: ', response);
// });

socket.on('sendMessage', function(message) {
    console.log('Server: ', message);
});