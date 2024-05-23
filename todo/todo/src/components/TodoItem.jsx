import React, { useState,useEffect} from 'react'
import { useTodo } from '../Contexts';

function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const [createdTime,setcreatedTime] = useState(todo.createTime)
    const [updatedTime,setupdatedTime] = useState(todo.updateTime)
  


    const {deleteTodo,updatedTodo,toggleComplete} = useTodo()
    
   

   

   const editTodo = () => {
    updatedTodo(todo.id,{...todo,todo:todoMsg,updateTime:new Date().toLocaleTimeString()})
    setIsTodoEditable(false)
    // setupdatedTime(Date.now())
    
   
    setupdatedTime(new Date().toLocaleTimeString())
    // createUpdatetime()
   
   }

   const toggleCompleted = () => {
    toggleComplete(todo.id)
   }

  
   
   
 
   
 

    return (
        <>
        <h1 className='mb-5 text-2xl font-semibold'> List is created at  : {createdTime}</h1>

        {updatedTime ? <h1 id='demo' className='mb-5 text-2xl font-semibold'> List is updated at  :{updatedTime} </h1> : ""}
        
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
           
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return setcreatedTime(createdTime)

                    if (isTodoEditable) {
                        
                        editTodo();
                        // setupdatedTime(new Date().toLocaleTimeString())
                        
                        



                       
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
        </>
    );
}

export default TodoItem;

