import Post from './Post.jsx';
function App() {
  let firstPost = "Manimuthu";
  let secondPost = "Arjun";
  let thirdPost = "Jayaram";

  return (
    <div className="App">
     {/* <h1>Personal Details Here......</h1>
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
     </div> */}
      <div className="container">
        <h1>React Components !!!</h1>
        <div className="row add">
          <Post name={firstPost} venue={"Madurai"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}></Post>
          <Post name={secondPost} venue={"Madurai"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}></Post>
          <Post name={thirdPost} venue={"Madurai"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Post>
        </div>
      </div>
    </div>
  )
}

export default App
