import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js"
const socket = io('http://localhost:3000')
const form = document.getElementById('form')
const input = document.getElementById('message')
const messages = document.getElementById('chat')

const user= "Francisco"
const otherUser=["Irbin", "El Insano TC", "Pako", "Angel"]

socket.on('chat message', (msg)=>{

    const item = `<li>${user}: <br>${msg}</br></li>`
    messages.insertAdjacentHTML('beforeend',item)
    messages.scrollTop = messages.scrollHeight
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit('chat message', input.value)
        input.value = ""
    }
})
