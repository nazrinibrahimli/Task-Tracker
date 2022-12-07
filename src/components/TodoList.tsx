import React from 'react';
import './style.css';
import {Todo} from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    allTodo: Todo[];
    setAllTodo:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC <Props>= ({allTodo, setAllTodo}: Props) => {
  return (
    <div className='todolist'>
      {allTodo.map (todo => (
          <SingleTodo todo={todo}
          key={todo.id}
          allTodo={allTodo}
          setAllTodo={setAllTodo}/>
      ))}
    </div>
  )
}

export default TodoList;
