import openSocket from 'socket.io-client';
const socket = openSocket('wss://lgraham-book-search.herokuapp.com');

function subscribeToBookAdd(book) {
    socket.on('example_message', message => book(message));
}

export { subscribeToBookAdd }