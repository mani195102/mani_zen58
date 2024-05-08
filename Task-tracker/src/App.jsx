import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks([{
    id:1,title:"water the plants",
    complete: false
  },
  {
    id:2,title:"clean the road",
    complete: false
  },
  {
    id:3,title:"wash the hands",
    complete: false
  }
])

  },[]);

  const handleComplete = (taskId) =>{
    const UpdatedTasks = tasks.map(task => task.id === taskId ? {...task, complete: true }: task);
    setTasks(UpdatedTasks);
  }

  return (
    <div>
      <div className="container">
     <TaskList  task={tasks} onComplete={handleComplete}  /> 
     </div>
    </div>
  )
}

export default App
