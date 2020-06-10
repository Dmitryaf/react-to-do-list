import React from 'react'
import styles from './TodoItem.module.sass'

import PropTypes from 'prop-types'

function TodoItem({todo, index, toggleCheckBox}){
  let classes = [];

  if(todo.completed){
    classes.push(styles.item_completed);
  }

  return (
      <li className={`${styles.item} ${classes.join('')}`}>
        <span className={styles.text}>
          <input type="checkbox" className={styles.input} onChange={() => toggleCheckBox(todo.id)}/>
          <strong>{index + 1 + "."}</strong>
          {todo.title}
        </span>
        <button className={styles.btn}></button>
      </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  toggleCheckBox: PropTypes.func.isRequired
}

export default TodoItem