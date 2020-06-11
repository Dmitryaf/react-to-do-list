import React, {useContext} from 'react'
import store from '../../store'

import styles from './TodoItem.module.sass'

import PropTypes from 'prop-types'

function TodoItem({todo, index}){
  const {toggleCheckBox, removeTodo} = useContext(store);
  const classes = [];

  if(todo.completed){
    classes.push(styles.item_completed);
  }

  return (
      <li className={`${styles.item} ${classes.join('')}`}>
        <span className={styles.text}>
          <input 
            type="checkbox"
            checked={todo.completed}
            className={styles.input} 
            onChange={() => toggleCheckBox(todo.id)}
            />

          <strong>{index + 1 + "."}</strong>
          {todo.title}
        </span>
        <button className={styles.btn} onClick={()=> removeTodo(todo.id)}></button>
      </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  toggleCheckBox: PropTypes.func.isRequired
}

export default TodoItem