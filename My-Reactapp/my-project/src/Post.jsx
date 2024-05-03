import React from 'react'

function Post(props) {
  return (
    
      <>
          <div className="col-sm-4 card">
            <div className="card-container">
              <div className="card-header">
                <h3>{props.name} - {props.venue}</h3>
              </div>
              <div className="card-body">
                  <p>{props.content}</p>
              </div>
            <button>Like</button>
            <button>Comment</button>
            </div>
          </div>
        </>
      
  )
}

export default Post