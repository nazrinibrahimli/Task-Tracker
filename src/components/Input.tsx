import React, {useRef} from 'react'
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

 const inputRef = useRef<HTMLInputElement>(null);   
console.log(todo);

  return (
    <div>
      <form className='input' 
      onSubmit={(e)=> {handleAdd(e); inputRef.current?.blur()}}> 
      <input type="input" placeholder='Enter a task' className='input_box'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}/>
      <button type="submit" className='input_submit'>Go</button>
       </form>
    </div>
  )
}

export default InputField
