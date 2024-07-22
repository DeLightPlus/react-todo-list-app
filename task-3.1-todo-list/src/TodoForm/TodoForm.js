import "./TodoForm.css";

import { useState } from 'react';

export function TodoForm({ onSubmit })
{
    const [newTodoItem, setNewTodoItem] = useState("");

    function handleSubmit(e)
    {
        e.preventDefault();        

        if(newTodoItem === "") 
          return;

        onSubmit(newTodoItem); 

        setNewTodoItem("");   
    }

    return(
        <div className="header"> 
            <form onSubmit={ handleSubmit }>
            <input value={ newTodoItem } type="text" placeholder="Add New ToDo item" 
              onChange={ e => setNewTodoItem(e.target.value) }/>
            <button>Add</button>
            {/* <hr />
            <input type="text" placeholder="Search"
              onChange={ () => { console.log("") } }/> */}
            </form>       
                     
        </div>
    )
}