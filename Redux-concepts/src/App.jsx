import React, { useState } from 'react';
import CustomerAdd from './CustomerAdd';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import CustomerView from './CustomerView';


function App() {
//   const [result, setResult] = useState(0);

  // const operation = (a, b, c) => {
  //   const newResult = a + b + c;
  //   console.log("Result:", newResult);
  //   setResult(newResult);
  // }

  return (
    <Provider store={store}>
	<h1>React redux example</h1>
	<CustomerAdd />
  <CustomerView />
      {/* <button onClick={() => operation(30, 30, 30)}>Change result</button>
      <p>Result: {result}</p> */}
    </Provider>
  );
}

export default App;

