const socket = io();

socket.on('welcomeMessage', (data) => {
    console.log(data);
});

socket.on("newMessageFromServer", (data)=>{
    const chatWindow= document.getElementById('chatWindow');
    const newMessage = document.createElement('p');

    newMessage.innerText = data;
    chatWindow.appendChild(newMessage);
})

document.getElementById("sendMessage").addEventListener("click", ()=>{
    const inputVal = document.getElementById("messageInput").value

    socket.emit("newMessage", inputVal)
})