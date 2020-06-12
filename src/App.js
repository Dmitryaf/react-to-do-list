import React, {useEffect} from 'react';
import TodoList from './Components/TodoList/TodoList';

import store from './store';
import Preloader from './Components/Preloader/Preloader';
import AddTodo from './Components/AddTodo/AddTodo';

function App() {
  let [todos, setTodos] = React.useState([]);
  let [preloader, setPreloader] = React.useState(true);
  
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setPreloader(false);
        }, 500)
      })
  },[])

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

        {preloader && <Preloader/>}
        {todos.length ? <TodoList todos={todos}/> : preloader ? null : <p>Список задач пуст!</p>}
        
      </div>
    </store.Provider>
  )
}

export default App;
