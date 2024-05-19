 import React, { useState} from 'react'
import { addCustomer as addCustomerAction } from './Redux/CustomerSlice';
import { useDispatch } from 'react-redux';
 
 function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addCustomer = () => {
        if(input){
            dispatch(addCustomerAction(input));
            setInput("");
        }

    }
   return (
     <div>
        <h3>Add New customer</h3>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addCustomer()}>Add</button>

     </div>
     
   )
 }
 
 export default CustomerAdd