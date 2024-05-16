import React, {useReducer} from 'react'

function reducer(toys, action){
  switch(action.type){
    case 'add_toy':
    return [...toys,action.payload];
    case 'remove_toy':
      return toys.filter(t => t !== action.payload);
    default:
      return toys;
  }

}

function ToyWithReducer() {
  const [toys, dispatch] = useReducer(reducer, ['blocks','cars','dolls']);
  return (
    <div>
      <h1>Toy with Reducer</h1>
      {toys.map((toy, index) =><p key={index}>{toy}</p>)}
      <button onClick={() =>dispatch({ type: 'add_toy',payload: 'Puzzle'})}>Add Puzzle</button>
      <button onClick={() =>dispatch({ type: 'remove_toy',payload: 'cars'})}>Remove cars</button>
    </div>
  )
}

export default ToyWithReducer