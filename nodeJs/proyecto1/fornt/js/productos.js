document.addEventListener("DOMContentLoaded", ()=>{
    async function getProducts(){
        const urlGetProductos= "http://localhost:3000/productos"
        const productsGET= await fetch(urlGetProductos);
        const products = await productsGET.json();
        return products.productos
    }


const productos= document.getElementById('productos');
    async function insertarDatos(){

        const products= await getProducts();
        let productsName= []
        for(let i=0; i<products.length; i++){
            productsName[i]= products[i].nombre
            const options= document.createElement("option")
            options.textContent= productsName[i]
            options.value= productsName[i]+"-"+products[i].precio
            productos.appendChild(options)
        }

        
    }
    insertarDatos()

    
    let listProducts= []
    const add= document.getElementById('add')
    add.addEventListener("click", async (e)=>{
        e.preventDefault();
        const selectedProduct= productos.value
        const addProduct= document.getElementById('addProduct')

        const li= document.createElement("li")
        li.textContent= selectedProduct
        addProduct.appendChild(li)
        listProducts= [selectedProduct, ...listProducts]

    })


const comprar= document.getElementById('comprar')
comprar.addEventListener("click", async (e)=>{
    e.preventDefault()
    const mensaje= document.getElementById('mensaje')

    const lista= JSON.stringify(listProducts)

    const urlPostLista= "http://localhost:3000/compra"
    const option={
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: lista
    }

    const res= await fetch(urlPostLista, option)
    const respuesta= await res.text()
    mensaje.textContent= respuesta
    


})


    
})


