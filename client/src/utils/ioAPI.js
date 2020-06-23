import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002', { transports: ['websocket'], upgrade: false});

function subscribeToBookAdd(book) {
    socket.on('example_message', message => book(message));
}

export { subscribeToBookAdd }