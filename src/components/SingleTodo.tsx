import React from 'react'
import {Todo} from '../model'
import { AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import { MdDoneOutline} from 'react-icons/md'
import "./style.css"
import TodoList from './TodoList'
import {useState} from 'react';


interface Props{
  todo: Todo;
  allTodo: Todo[]
  setAllTodo:React.Dispatch<React.SetStateAction<Todo[]>>;

};


const SingleTodo= ({todo, allTodo, setAllTodo}:Props) => {
const [edit,setEdit] = useState<boolean>(false);
const [editTodo,setEditTodo] = useState<string>(todo.todo);


const handleDone = (id:number) => {
  setAllTodo(allTodo.map((todo) => todo.id===id? {...todo, isDone: !todo.isDone} :todo )
  )};

const handleDelete = (id:number) => {
  setAllTodo(allTodo.filter((todo)=> todo.id!==id));
};

const handleEdit = (e:React.FormEvent, id:number) => {
  e.preventDefault();

  setAllTodo(allTodo.map((todo) => (
    todo.id===id? {...todo,todo:editTodo}:todo
  ))
  
  );
  setEdit(false);

};




  return (
      <form className='allTodo_single' onSubmit={(e) => handleEdit(e, todo.id)}>
{
  edit? (
    <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="allTodo_single--text"/>
  ): (
    todo.isDone ? (

      <s className='allTodo_single--text'>
      {todo.todo}
      </s>
          ): (
        <span className='allTodo_single--text'>
        {todo.todo}
      </span>

          ) 
  )
}




    




    

        <div>
          <span className="icon" onClick={() => {if(!edit && !todo.isDone)
          setEdit(!edit);
          } }>
          <AiOutlineEdit/>
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiOutlineDelete/>
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDoneOutline/>
          </span>

        </div>
      </form>
      
  )
}

export default SingleTodo
