import React,{useState, useContext} from 'react';
import store from '../../store';

import styles from './AddTodo.module.sass';

function AddTodo(){
  let {onCreate} = useContext(store);
  let [value, setValue] = useState('');

  function submitHandler(event){
    event.preventDefault();

    if(value.trim()){
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)} 
        className={styles.input}
        />

      <button type="submit" className={styles.btn}>Добавить задачу</button>
    </form>
  )
}

export default AddTodo;