import React, {useState}from 'react'

function ToyWithoutReducer() {
    const [toys, setToys] = useState(['blocks','cars','dolls']);
    const addToy =(toy) =>{
        setToys([...toys, toy]);
    }
    const removeToy =(toy) =>{
       setToys( toys.filter(t => t !== toy));
    }
  return (
    <div>
        <h1>ToyWithoutReducer </h1>
        {toys.map((toy, index) =><p key={index}>{toy}</p>)}
        <button onClick={() =>addToy('Puzzle')}>Add Puzzle</button>
      <button onClick={() =>removeToy('cars')}>Remove cars</button>
    
    </div>
  )
}

export default ToyWithoutReducer