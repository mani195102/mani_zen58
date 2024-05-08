import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskItem = (props) => {
    const headInStyle = {
        textAlign: 'left',
        marginBottom: '16px',
        textTransform:'Uppercase',
        fontSize: '1.2em',
    }
    const btnStyle ={
        margin:'0 15px',
    }
  return (
    <div style={{margin:'1.4em 0'}}className='taskitem'>
       
            <p style={headInStyle}>{props.task.title + " " + props.task.complete}</p>
            <button style={btnStyle}className="btn btn-success" onClick={() =>props.onComplete(props.task.id)}>Complete</button>
        
    </div>
  )
}

export default TaskItem