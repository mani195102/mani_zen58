import React from 'react'

function Tree({color,fruit}) {
  return (
    <div style={{color:color,fruit:fruit}}>
        <h2>The Tree color is {color} and has {fruit}.</h2>

    </div>
  )
}

export default Tree