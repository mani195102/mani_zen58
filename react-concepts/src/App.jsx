import { useState } from 'react'
import Tree from './Tree';

function App() {
  const [color, setColor] = useState('green');
  const [fruit, setFruit] = useState('green');

  function handleChangeColor(newColor){
    setColor(newColor);
  }
  function handleChangeFruit(newFruit){
    setColor(newFruit);
  }
  return (
    <div className="App">
      <Tree color={color} fruit={fruit} />
      <button onClick={() => handleChangeColor('red')}>Red</button>
      <button onClick={() => handleChangeColor('blue')}>Blue</button>
      <button onClick={() => handleChangeFruit('Jackfruit')}>Grow Jackfruit</button>  
      <button onClick={() => handleChangeFruit('Grapes')}>Grow Grapes</button>        
    </div>
  )
}

export default App
