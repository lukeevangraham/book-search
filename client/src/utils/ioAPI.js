import openSocket from 'socket.io-client';
const socket = openSocket('https://' + window.location.hostname);

function subscribeToBookAdd(book) {
    socket.on('example_message', message => book(message));
}

export { subscribeToBookAdd }