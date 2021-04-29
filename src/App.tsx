import React, { useState } from 'react';
import { AddToDoForm } from './TodoList/AddToDoForm';
import { ToDoList } from './TodoList/ToDoList';

const initialTodos:Array<Todo>=[];



const App:React.FC=()=>{

  const [todos,setToDos]=useState(initialTodos)
  

  const toggleTodo:ToggleTodo=(selectedTodo)=>{
     

        const newTodos=[...todos];
        let index=newTodos.findIndex(todo=>todo.text===selectedTodo.text);
        let todo=newTodos[index];
        todo.complete=true;
         setToDos(newTodos);
        newTodos.splice(index,1);
        setToDos(newTodos);
      
}

  const addTodo:AddTodo=newTodo=>{
    newTodo.trim()!=="" && setToDos([...todos,{text:newTodo,complete:false}])
  }

  return(
        <React.Fragment> 
             <ToDoList todos={todos} toggleTodo={toggleTodo}/>
             <AddToDoForm addToDo={addTodo}/>
      </React.Fragment>
  
)}

export default App;
