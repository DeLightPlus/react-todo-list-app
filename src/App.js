import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import { TodoForm } from './TodoForm/TodoForm.js';
import { TodoList } from './TodoList/TodoList.js';

export default function App() 
{
  const [todoList, setTodoList] = useState(() =>
  {
    const localValue = localStorage.getItem("TodoItems");
    if(localValue == null){ return [] }

    return JSON.parse(localValue)
  })

  useEffect(() => 
  {      
    localStorage.setItem("TodoItems", JSON.stringify(todoList));
  }, [todoList])

  function addTodo(title)
  {
    setTodoList(currentList =>
      {
          return [...currentList, 
          { id: crypto.randomUUID(), title, completed: false}, ]
      })
  }

  function toggleTodo(id, completed)
  {
      setTodoList(currentList => 
        {
          return currentList.map(todo =>
          {
              if(todo.id === id){ return { ...todo, completed } }
              return todo
          }
          )
      }
      )
  }

  function deleteTodoItem(id)
  {
      setTodoList(currentList => 
          {
            alert("trying to dlete?")
              return currentList.filter(todo => todo.id !== id);
          }
      )
  }
   
  return (
    <div className="App">
      <header className="App-header"> ToDo - List       
      </header>

      <main>
        <div className="todo-list-container">
          <TodoForm onSubmit={ addTodo }/>
          <TodoList 
            todoList={ todoList }
            toggleTodo={ toggleTodo } 
            deleteTodoItem={ deleteTodoItem }
          />
        </div>
      </main>

    </div>
  );
}


// <>
// <img src={logo} className="App-logo" alt="logo" />
// <p> Edit <code>src/App.js</code> and save to reload. </p>
// <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a>
// </>