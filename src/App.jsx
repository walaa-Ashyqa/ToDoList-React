import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef =useRef();

const addTask=()=>{
  const value=  inputRef.current.value;
  const newData ={title:value, completed:false}
  setTasks([...tasks, newData]);
  inputRef.current.value="";
}
const itemDone =(index)=>{
const newTasks=[...tasks];
newTasks[index].completed= !newTasks[index].completed;
setTasks(newTasks)
}

const toDelete =(index)=>{
  const newTasks=[...tasks];
  newTasks.splice(index,1);
  setTasks(newTasks);
}
  return (
    <div className="App">
<h2>To Do List</h2>
<ul>
  {
    tasks.map((task,index)=>{
      return  (
        <div className='task-item'>
      <li className={task.completed ? "Complete": ""} onClick={()=>itemDone(index)}>{task.title}</li> 
<span onClick={()=> toDelete(index)}>❌</span>
        </div>
      )
    })
  }
</ul>
<input  type="text" ref={inputRef} placeholder='Enter New Task'   />
<button onClick={addTask}>Add</button>
    </div>
  )
}

export default App
