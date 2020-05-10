import openSocket from 'socket.io-client';
const socket = openSocket('http://127.0.0.1:8000');

function subscribeToBookAdd(book) {
    socket.on('example_message', message => book(message));
}

export { subscribeToBookAdd }