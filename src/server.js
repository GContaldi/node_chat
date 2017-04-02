const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const actions = require('./app/actions');

const DEFAULT_PORT = 5000;

const app = express();
const server = http.Server(app); // eslint-disable-line new-cap
const io = socketIO(server);

app.set('port', (process.env.PORT || DEFAULT_PORT));

app.use('/', express.static(path.join(__dirname, '../public')));

server.listen(app.get('port'), function() {
  console.log('Simple node chat is running on port', app.get('port'));
});

io.on('connection', function(socket) {
  console.log('Socket connected: ' + socket.id);
  socket.on('action', (action) => {
    if (action.type === actions.SEND_MESSAGE) {
      const payload = actions.addMessage({
        username: socket.id,
        text: action.messageText
      });
      io.emit('action', payload);
    }
  });
});

module.exports = app;
