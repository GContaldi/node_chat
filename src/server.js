const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const DEFAULT_PORT = 5000;

const app = express();
const io = socket(app);

app.set('port', (process.env.PORT || DEFAULT_PORT));

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(app.get('port'), function() {
  console.log('Simple node chat is running on port', app.get('port'));
});

io.on('connection', function() {});

module.exports = app;
