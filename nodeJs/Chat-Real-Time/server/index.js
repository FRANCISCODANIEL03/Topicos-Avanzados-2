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


const createTable=`CREATE TABLE IF NOT EXISTS TABLE Message(
	id INTEGER(3) NOT NULL AUTO_INCREMENT,
	content VARCHAR(50) NOT NULL,
	usuario VARCHAR(40) NOT NULL,
	
	CONSTRAINT Message_id_pk
		PRIMARY KEY (id)
);
`

connection.query(createTable, (err, results)=>{
  if(err){
    console.log('No se pudo crear la tabla')
  }
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
  socket.on('chat message', (msg, auth, serverOffset)=>{
    connection.query('INSERT INTO Message (content, usuario) VALUES (?, ?);', [msg, auth], (err, results)=>{
      if(err){
        console.log('No se pudo obtener los mensajes')
      }
    console.log({user: auth, message: msg, serverOffset})
    io.emit('chat message', msg, auth, serverOffset)
    });
  })

  if(!socket.recovered){
    connection.query('SELECT * FROM Message WHERE id > (?);',[socket.handshake.auth.serverOffset], (err, results) => {
        if (err) {
            console.log('No se pudo obtener el último mensaje', err);
            return;
        }
        results.forEach(row => {
          console.log( row.content, socket.handshake.auth.serverOffset)
          socket.emit('chat message',  row.content, row.usuario, socket.handshake.auth.serverOffset);
        });
    
    });
  }



});
app.get('/', (req, res) => {
  res.send("Server online")
});


server.listen(PORT, () => {
    console.log(`Server listo en el puerto ${PORT}`);
});
