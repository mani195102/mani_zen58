import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';

const Products = ({ product }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const truncateDescription = (text, maxLength) => (
    text.length <= maxLength ? text : `${text.substr(0, maxLength)}...`
  );

  const title = product.title.length > 22 ? `${product.title.substring(0, 21)}...` : product.title;

  const isInCart = cart.some(item => item.id === product.id);

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
            <b>Price Rs</b> - <span className='red'>{product.price}/-</span>
          </Card.Text>
          <Button 
            onClick={() => dispatch(isInCart ? removeFromCart(product.id) : addToCart(product))} 
            variant={isInCart ? "danger" : "success"}
          >
            {isInCart ? "Remove from cart" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
