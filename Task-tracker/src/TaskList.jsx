import React from 'react'
import TaskItem from './TaskItem'


const TaskList = (props) => {
  return (
    <div className='task-tracker'>
        {props.task.map(task =>(
            <TaskItem key={task.id} task={task} onComplete={props.onComplete} />
        ))}
    </div>
  )
}

export default TaskList