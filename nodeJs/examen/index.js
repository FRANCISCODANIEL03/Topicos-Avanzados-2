const express = require("express")
const cors = require("cors")

const app= express()
const PORT= 3000;


app.use(cors())
app.use(express.json())



let listTask= []
app.get('/listTask', (req, res)=>{
    console.log('Tareas: ', listTask)
    if(listTask.length === 0){
        return res.json({message: 'No hay tareas'})
    }
    res.json(listTask)
})


app.post('/addTask', (req, res)=>{
    const {task, description}= req.body
    console.log(task, description)
    
    if(!task){
        res.status(400).json({message: 'No se ha enviado la tarea'})
    }
    if(!description){
        res.status(400).json({message: 'No se ha enviado la descripción'})
    }

    listTask= [...listTask, {task, description}]
    console.log(listTask)
    res.json({message: 'Tarea agregada', task: task})
});

app.listen(PORT, ()=>{
    console.log(`Servidor el http://localhost:${PORT}`)
})

app.delete('/deleteTask', (req, res)=>{
    listTask= []
    res.json({message: 'Tareas eliminadas'})
});