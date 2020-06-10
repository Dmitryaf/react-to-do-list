import React from 'react'
import TodoList from './Todo/TodoList'

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
        console.log(todo)
        return todo;
      })
    ) 
  }
  

  return (
    <div className="wrapper">
      <h1 className="title">React to-do list</h1>

      <TodoList todos={todos} toggleCheckBox={toggleCheckBox}/>
    </div>
  )
}

export default App;
