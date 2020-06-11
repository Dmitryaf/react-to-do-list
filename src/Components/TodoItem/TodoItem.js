import React, {useContext} from 'react';
import store from '../../store';

import styles from './TodoItem.module.sass';

import PropTypes from 'prop-types';

function TodoItem({todo, index}){
  let {toggleCheckBox, removeTodo} = useContext(store);
  let classes = [];

  if(todo.completed){
    classes.push(styles.item_completed);
  }

  return (
      <li className={`${styles.item} ${classes.join('')}`}>
        <span>
          <input 
            type="checkbox"
            checked={todo.completed}
            className={styles.input} 
            onChange={() => toggleCheckBox(todo.id)}
            />

          <span className={styles.text}>
            <span>{index + 1 + "."}</span>
            {todo.title}
            </span>
        </span>
        <button className={styles.btn} onClick={()=> removeTodo(todo.id)}></button>
      </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem;