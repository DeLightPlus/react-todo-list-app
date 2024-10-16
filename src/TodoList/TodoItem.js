import "./TodoList.css"

export function TodoItem({id, title, completed, toggleTodo, deleteTodoItem})
{
    return(
        <li key={ id }>
            <label>
                { title }                
            </label>
            
            <div >
                <button onClick={() => deleteTodoItem(id)}>                
                Delete</button>

                <input type='checkbox' checked={ completed } 
                    onChange={e => toggleTodo(id, e.target.checked)}/>
            </div>
        </li>
    )
}