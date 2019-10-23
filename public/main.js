var socket = io();


socket.on("newMessageFromServer", (data) => {
  const chatWindow = document.getElementById('chatWindow')
  const newLine = document.createElement('p');
  newLine.innerText = data.inputVal;
  chatWindow.appendChild(newLine);
});

document.getElementById('sendMessage').addEventListener('click', (e) => {
  const inputVal = document.getElementById('messsageInput').value;
  socket.emit('newMessageFromClient', { inputVal });
});

