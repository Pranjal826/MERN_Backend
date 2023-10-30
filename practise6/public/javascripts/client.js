const socket = io();

const form = document.querySelector('form');
const input = document.querySelector('#message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    socket.emit('chat message', input.value);
    input.value = '';
});

socket.on('chat message', function (msg) {
    const messages = document.querySelector('#messages');
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
});
