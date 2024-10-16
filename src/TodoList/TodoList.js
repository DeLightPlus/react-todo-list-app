import { TodoItem } from "./TodoItem"
import "./TodoList.css"

export function TodoList({ todoList, toggleTodo, deleteTodoItem })
{
    

    return(
        
        <div className="list-container">
            <ul className='list'>
            { todoList.length === 0 && "No Todos"}
            { 
                todoList.map(todo => 
                { 
                    return( 
                        <TodoItem {...todo} key={ todo.id } 
                        toggleTodo={toggleTodo} 
                        deleteTodoItem={deleteTodoItem}/>
                    )
                })
            } 

            </ul>
        </div>
       
    )
}


