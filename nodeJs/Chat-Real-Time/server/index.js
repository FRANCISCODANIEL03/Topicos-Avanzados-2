import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import {createServer} from 'node:http';
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config()


const connection= mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PSW
})
connection.connect(function(err) {
  if (err) {
    console.error('No se pudo conectar a la BD' || err)
    return;
  }
 
  console.log('Conectado en la BD ');
});


const PORT = process.env.PORT || 3000;


const app = express();

const server = createServer(app)
const io = new Server(server,{
  cors:{
    origin: "*",
    methods: ["GET", "POST"]
  }
});


io.on('connection', (socket)=>{
  console.log('Usuario conectado');
  socket.on('disconnect', ()=>{
    console.log('Usuario desconectado');
  })
  socket.on('chat message', (msg, auth)=>{
    /*
    let message
    connection.query('INSERT INTO Message (content, usuario) VALUES (?, ?);', [msg, usuario], (err, results)=>{
      if(err){
        console.log('No se pudo obtener los mensajes')
      }else{
        message= results
      }
    });
    */
    console.log(msg, auth)
    io.emit('chat message', msg)
  })
  /*
  if(!socket.recovered){
    connection.query('SELECT * FROM Messages WHERE id > ?;', [lastId], (err, results)=>{
      if(err){
        console.log(err)
      }
      results.forEach(row => {
        socket.emit('chat message', results.content, results.id.toSring());
      });
    });
  }
  */


});
app.get('/', (req, res) => {
  res.send("Server online")
});


server.listen(PORT, () => {
    console.log(`Server listo en el puerto ${PORT}`);
});
