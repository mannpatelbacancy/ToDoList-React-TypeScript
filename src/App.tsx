import React from 'react';
import {ToDoListItem} from './TodoList/ToDoListItem';

const todos:Array<Todo>=[
  { text:"walk a dog",complete:false},
  { text:"playing cricket",complete:true},

];


const App:React.FC=()=>{
  return(
        <React.Fragment> 
             <ToDoListItem todo={todos[0]}/>
             <ToDoListItem todo={todos[1]}/>
      </React.Fragment>
  
)}

export default App;
