import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import PropTypes from 'prop-types'

function TodoList(props){
  return (
    <ul>
      {
        props.todos.map((todo, index) => {
          return (
            <TodoItem 
              todo={todo} 
              key={todo.id} 
              index={index} 
              toggleCheckBox={props.toggleCheckBox}
            />
          )
        })
      }
      
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCheckBox: PropTypes.func.isRequired
}

export default TodoList