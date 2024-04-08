const express = require("express");
const cors = require("cors");

const app= express();
const PORT = 3000;


app.use(cors()); // Para recibir datos de ip´s distintas a localhost

app.use(express.json()); //Permite leer datos JSON

app.listen(PORT, ()=>{
    console.log(`Servidor creado en el puerto: ${PORT}`)
    console.log(`Servidor en http://localhost:${PORT}`)});


/* 

--> GET     LEER
--> POST    ESCRIBIR
--> PATCH   MOPDIFICAR UN ATRIBUTO
--> PUT     MODIFICAR EL REGISTRO
--> DELETE  ELIMINAR     

*/ 

app.get("/", (req, res)=>{ //el req (request) es de donde viene, el res (respuesta) es hacia donde va
   res.send("<h1>Hola desde node </h1>");
});

app.get("/json", (req, res)=>{
    res.json({msg: "Hola con JSON"})
})

app.get("/suma/:numero1/:numero2", (req, res)=>{
    try{
        var numero1= parseInt(req.params.numero1);
        var numero2= parseInt(req.params.numero2);
        
        if(isNaN(numero1) || isNaN(numero2)){
            res.status(500).send("Datos ingresados no validos");
        }
    }catch(error){
        res.status(500).send("Datos ingresados no validos ", error);
    }
    
    res.send(`La suma de ${numero1} + ${numero2} = ${(numero1+numero2)}`);

})


app.get("/person/:name/:age", (req, res)=>{
    var {name, age} = req.params;
    const resDataHTML= `
    <div>
        <h1>Hola ${name} </h1>
        <br/>
        <p>Tu edad es: ${age} </p>
    </div>
    `;
    res.send(resDataHTML);
})
//app.put();
//app.post();
//app.patch();
//app.delete();