
import React, { useState ,ChangeEvent, FormEvent} from 'react';

interface AddToDoFormProps{
    addToDo:AddTodo
}

export const AddToDoForm:React.FC<AddToDoFormProps>=({addToDo})=>{
    const [newTodo,setNewTodo]=useState("");

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value);
    }

    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        addToDo(newTodo)
        setNewTodo('')
        
    }
    return(
        <form>
        <input type="text" placeholder="enter tasks" value={newTodo} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Add ToDo</button>
        </form>
    );
}