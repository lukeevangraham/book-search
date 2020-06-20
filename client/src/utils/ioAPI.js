import openSocket from 'socket.io-client';
const socket = openSocket('http://lgraham-book-search.herokuapp.com:42279');

function subscribeToBookAdd(book) {
    socket.on('example_message', message => book(message));
}

export { subscribeToBookAdd }