import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'


const Todo = () => {
    const [todo,setTodo] = useState([{ task:"sample task" , id: uuidv4()}]);
    const [newTodo,setNewTodo] = useState("");

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
        
    }
    let addnewTodo = ()=> {
        setTodo([...todo, { task:newTodo , id: uuidv4()}]);
        setNewTodo("");
    }

    let deleteTodo = (id) => {
        setTodo((prevTask)=>todo.filter((prevTask) => prevTask.id != id));
    }
  return (
    <div className='flex justify-center  bg-black text-white h-screen' >
        <div className='border rounded mt-40 bg-slate-600 h-fit w-[50%] p-8 text-black'>
        <p className='text-xl text-center mb-4'> Set all your Routine here</p>
        <div className='flex mb-8'>
            
        <input className='mr-4 w-[70%%] p-2 rounded-lg' type="text"
        placeholder='add your task'
        onChange={updateTodo}
        value={newTodo} /> <br />
        <br />

        <button className='border p-2 bg-blue-800 rounded-2xl' onClick={addnewTodo}>Add task</button>
        
        
        </div>
        
        <h1 className='text-center text-2xl red-blue-700 mb-4 -500'> Your added task</h1>
        <hr className='' />
        <ul className='my-4 text-xl'>
            {
                todo.map((item) => {
                    return <li key={item.id}>
                        <span >{item.task}</span>
                        <button className='ml-4 border p-1 m-1 bg-red-600 rounded-2xl' onClick={()=> deleteTodo(item.id)}>Delete</button></li>
                })
            }
        </ul>
    </div>
    </div>
  )
}

export default Todo