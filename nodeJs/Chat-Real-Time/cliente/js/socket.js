import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js"

const users=["Irbin", "El Insano TC", "Pako", "Angel", "Miliano", "Lalo"]

const getUsername=()=>{
    const randomUser= Math.floor(Math.random() * users.length);
    return users[randomUser];
}

const socket = io('http://localhost:3000',{
    auth: {
        username: getUsername(),
        serverOffset: 0
    }
})
const form = document.getElementById('form')
const input = document.getElementById('message')
const messages = document.getElementById('chat')


socket.on('chat message', (msg, sender, serverOffset)=>{
    socket.auth.serverOffset= serverOffset
    const item = document.createElement('li');
    const msgg= [`<strong>${sender}:</strong> <br>${msg}</br>`, `${msg}`];
    item.innerHTML = (sender=== socket.auth.username)? msgg[1] : msgg[0];
    
    console.log(sender, 'server', socket.auth.username)
    if(sender=== socket.auth.username){
        item.classList.add('message-right')
    }else{
        item.classList.add('message-left')
    }
    messages.appendChild(item)
    messages.scrollTop = messages.scrollHeight
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit('chat message', input.value, socket.auth.username, socket.auth.serverOffset)
        input.value = ""
    }
})
