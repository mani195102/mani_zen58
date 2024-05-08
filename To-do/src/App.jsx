import TodoApp from "./TodoApp"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";


function App() {

  return (
    
    <div className="App">
        
  <div className="hero"> 
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <h1 className="text-center text-white my-3">My Todo</h1>
          <TodoApp />
        </div>
    </div>
  )
}

export default App
