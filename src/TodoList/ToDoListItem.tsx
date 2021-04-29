import React from 'react';

interface ToDoListItemProps{
    todo:Todo
    toggleTodo: ToggleTodo
}


export const ToDoListItem :React.FC<ToDoListItemProps>=({todo,toggleTodo})=>{
    return <li>
        <label style={{textDecoration:todo.complete?"line-through":"none "}}>
            <input type="checkbox" checked={todo.complete} onChange={()=>toggleTodo(todo)}/>
            {todo.text}
        </label>
    </li>;
}