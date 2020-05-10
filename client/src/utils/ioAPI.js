import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToBookAdd(book) {
    socket.on('example_message', message => book(message));
}

export { subscribeToBookAdd }