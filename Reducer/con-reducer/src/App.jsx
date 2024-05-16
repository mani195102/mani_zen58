import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ToyWithReducer from "./ToyWithReducer";
import ToyWithoutReducer from "./ToyWithoutReducer";
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
// const [count, setcount] = useState(0);
// const [newCount, setNewCount] =  useState(0);
// useEffect(() =>{
//   document.title = `You have clicked ${count} ${newCount} times`
// },[newCount])
  return (
  <>
  {/* <ToyWithReducer /> */}
  {/* <p>you have clicked the button {count} times</p>
  <p>you have clicked the button {newCount} times</p>
  <button onClick={() => setcount(count + 1)}> Add count</button>
  <button onClick={() => setNewCount(newCount + 1)}> Add new count</button> */}
  <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />}/>
      </Routes>
  </Router>

  </>
  )
}

export default App
