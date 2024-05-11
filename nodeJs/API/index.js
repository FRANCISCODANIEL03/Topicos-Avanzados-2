const express= require("express")
const cors= require("cors")
const mysql= require("mysql")
require('dotenv').config();




const app= express()
const PORT= 3000;


//middlewares
app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    const data={
        nombre: "Pako",
        edad: 19
    }

    res.json(data)
})

app.listen(PORT, ()=>{
    console.log("HOST: " + process.env.HOST)
    console.log(`Servidor iniciado en http://localhost:${PORT}/`)
});


const connection= mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})

connection.connect((err)=>{
    if(err){
        console.error(err.message || "Error al conectar con la BD")
    }else{
        console.log("Coneccion exitosa en la BD")
    }
})
