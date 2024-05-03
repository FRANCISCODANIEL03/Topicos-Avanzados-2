
addEventListener('DOMContentLoaded', async (e) => {
    await actualizardata(e);
});

async function actualizardata(e){
    e.preventDefault();
    const tbody = document.getElementById('listTask')
    const URLtoGetTask= 'http://localhost:3000/listTask';
    const awaitTasks= await fetch(URLtoGetTask);
    const tasks= await awaitTasks.json();

    const msg= document.querySelector('#msg');
    const message= tasks.message;


    if(tasks){
        msg.innerHTML= '';
    }
    if(tasks.message){
        msg.innerHTML= message;
    }

    tbody.innerHTML= '';


    for (let i=0; i<tasks.length; i++) {
        const tr= document.createElement('tr');
        const th= document.createElement('th');
        const th_description= document.createElement('th');
        th.innerHTML= tasks[i].task;
        th_description.innerHTML= tasks[i].description;
        tr.appendChild(th);
        tr.appendChild(th_description);
        tbody.appendChild(tr);
    }
}

const btnAddTask= document.getElementById('addTask');
btnAddTask.addEventListener('click', async (e) => {
    e.preventDefault();
    const task= document.getElementById('task').value;
    const description= document.getElementById('description').value;

    const data= {task, description};
    if(!task || !description){
        msg.innerHTML= 'No se ha enviado la tarea';
        return;
    }
    const URLtoAddTask= 'http://localhost:3000/addTask';
    const awaitAddTask= await fetch(URLtoAddTask, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await awaitAddTask.json();
    console.log(response);
    await actualizardata(e);
})

const deleteTask= document.getElementById('deleteTaks');
deleteTask.addEventListener('click', async (e) => {
    e.preventDefault();
    const URLtoDeleteTask= 'http://localhost:3000/deleteTask';
    const awaitDeleteTask= await fetch(URLtoDeleteTask, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await awaitDeleteTask.json();
    console.log(response);
    await actualizardata(e);
})