const express = require("express")
const cors= require("cors")

const app= express()
const PORT= 3000;


app.use(cors())
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}/`);
})

app.get('/productos', (req, res)=>{
    const productos={
        productos:[
            {
                nombre: "Jabon",
                precio: 300,
                marca: "headshoulder"
            },
            {
                nombre: "Cloro",
                precio: 200,
                marca: "Patito"
            },
            {
                nombre: "Zote",
                precio: 150,
                marca: "Zotito"
            },
            {
                nombre: "Papas",
                precio: 20,
                marca: "Sabritas"
            }
        ]
    }
        
    console.log(productos)
    res.json(productos)
})

const product=[]
let productsName=[]
let productsPrice=[]
app.post("/compra", (req, res)=>{
    const data = req.body;
    let total= 0;
    for(let i=0; i<data.length; i++){
        product[i]= data[i].split('-');
        productsName= [product[i][0], ...productsName]
        productsPrice= [product[i][1], ...productsPrice]
        total+=parseFloat(productsPrice);
    }

    res.send(`El total de tu lista es: ${total}`)
})