import React, {useEffect} from 'react';
import TodoList from './Components/TodoList/TodoList';

import store from './store';
import AddTodo from './Components/AddTodo/AddTodo';

function App() {
  let [todos, setTodos] = React.useState([]);
  
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos);
      })
  })

  function toggleCheckBox(id){
    setTodos (
      todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    ) 
  }

  function removeTodo(id){
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  function onCreate(title){
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }
  

  return (
    <store.Provider value={{removeTodo, toggleCheckBox, onCreate}}>
      <div className="wrapper">
        <h1 className="title">React to-do list</h1>
        <AddTodo/>
        {todos.length ? <TodoList todos={todos}/> : <p>Список задач пуст!</p>}
        
      </div>
    </store.Provider>
  )
}

export default App;
