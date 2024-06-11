import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import {createServer} from 'node:http';
import { Socket } from 'node:dgram';



const PORT = process.env.PORT || 3000;


const app = express();
app.use(cors());
const server = createServer(app)
const io = new Server(server) 


io.on('connection', (socket)=>{
  console.log('Usuario conectado');
  socket.on('disconnect', ()=>{
    console.log('Usuario desconectado');
  })
});
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/cliente/index.html');
});

server.listen(PORT, () => {
    console.log(`Server listo en el puerto ${PORT}`);
});
