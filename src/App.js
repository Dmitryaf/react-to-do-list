import React from 'react'
import TodoList from './Todo/TodoList'

import store from './store'

function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "Купить хлеб"},
    {id: 2, completed: false, title: "Купить масло"},
    {id: 3, completed: false, title: "Купить молоко"}
  ]);
    
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
  

  return (
    <store.Provider value={{removeTodo, toggleCheckBox}}>
      <div className="wrapper">
        <h1 className="title">React to-do list</h1>

        <TodoList todos={todos}/>
      </div>
    </store.Provider>
  )
}

export default App;
