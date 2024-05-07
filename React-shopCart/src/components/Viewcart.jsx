import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState , useEffect} from 'react'
import { useContext } from "react"
import CartContext  from './CartContext';


const Viewcart = () => {
  const {cart,setCart} = useContext(CartContext);

  const [total,setTotal] = useState(0);
  useEffect(() => {
      setTotal(cart.reduce((acc , curr) => acc + parseInt(curr.price), 0));
  },[cart]);
  return (
    <div className="cart">
      {cart.map((product) =>(
         <Card className="cart_pdt" key={product.id}>
         <Card.Header><img src={product.thumbnail} alt={product.title}/></Card.Header>
         <Card.Body>
           <Card.Title>{ product.title }</Card.Title>
           <Card.Text>
             Brand : {product.brand}
           </Card.Text>
           <Card.Text>
             Price Rs : {product.price}
           </Card.Text>
         </Card.Body>
       </Card>
      ))}
  <div className="cart-footer">
    <p><b>Total Amount :- {total} </b></p>
  </div>
  </div>
  )
}

export default Viewcart