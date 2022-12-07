import React from 'react';
import "./App.css";
import InputField from './components/Input';
import { useState } from 'react';
import {Todo} from "./model";
import TodoList from './components/TodoList';

const App:React.FunctionComponent = () => {

const [todo, setTodo] = useState<string >("")
const [allTodo, setAllTodo] = useState<Todo[]>([]);
const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

if(todo){
  setAllTodo([...allTodo, { id: Date.now(), todo, isDone:false}]);
  setTodo("");
}

console.log(allTodo);

};


  return (
    <div className="App">
      <span className='heading'> Task Tracker</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList allTodo={allTodo} setAllTodo={setAllTodo}/>
    </div>
  );
}

export default App;
