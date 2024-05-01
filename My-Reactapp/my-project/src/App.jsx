function App() {
  let name = "Manimuthu";
  let phone = "1231231234";

  return (
    <div className="App">
     <h1>Personal Details Here......</h1>
     <ol>
      <li>Name : Manimuthu</li>
      <li>Age : 29</li>
      <li>City : Madurai</li>
      <li>Designation : Developer</li>
     </ol>

     <div>Phone contact Application</div>
     <button>Add</button>
     <div className="main">
      <span>Name : {name}</span><br/>
      <span>Phone : {phone}</span>
     </div>
    </div>
  )
}

export default App
