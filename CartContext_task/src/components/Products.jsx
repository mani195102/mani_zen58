import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import CartContext  from './CartContext';


const Products = ({product}) => {

  const {cart,setCart} = useContext(CartContext);
     const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
      };
      const title = product.title.length  > 22 ? product.title.substring(0,21) + ".." : product.title;
      const addcart =() => {
        setCart([...cart, product]);

      }
      const removecart =() => {
        setCart(cart.filter((c) => c.id !== product.id));
      }

  return (
    <div className='product'>
       
        <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>
        {truncateDescription(product.description, 55)}
        </Card.Text>
        <Card.Text>
          <b>Price Rs</b> -<span className='red'>{product.price}/-</span>
        </Card.Text>
        { cart.includes(product) ? (
            <Button onClick={removecart} variant="danger">Remove cart</Button>
          ) : (
            <Button onClick={addcart} variant="success">Add cart</Button>
          )}        
      </Card.Body>
    </Card>
     
     
    </div>
  )
}

export default Products