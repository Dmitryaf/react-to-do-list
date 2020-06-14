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
        <div className={styles.content}>
          <input 
            type="checkbox"
            checked={todo.completed}
            className={styles.input} 
            onChange={() => toggleCheckBox(todo.id)}
            />

          <span className={styles.text}>
            <b>{index + 1 + "."}</b>
            {todo.title}
          </span>
        </div>
        <button className={styles.btn} onClick={()=> removeTodo(todo.id)}></button>
      </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem;