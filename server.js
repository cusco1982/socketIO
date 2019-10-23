const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on('connection', client => {
  console.log("Socket Connected");
  client.on('newMessageFromClient', data => {
    console.log(data);
    io.emit('newMessageFromServer', data);
  });
});

server.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});