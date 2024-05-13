import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

const Viewcart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc + (curr.totalPrice || curr.price), 0);
    const newTotalQuantity = cart.reduce((acc, curr) => acc + (curr.quantity || 1), 0);
    setTotal(newTotal);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const handleDecrease = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        // Decrease quantity if greater than 1
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        const newTotalPrice = item.price * newQuantity;
        return { ...item, quantity: newQuantity, totalPrice: newTotalPrice };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleIncrease = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        // Increase quantity up to maximum stock
        const newQuantity = item.quantity < item.stock ? item.quantity + 1 : 2;
        const newTotalPrice = item.price * newQuantity;
        return { ...item, quantity: newQuantity, totalPrice: newTotalPrice };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDelete = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="cart">
      <h2>Happy Cart !!!</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Product</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="6" className='cart-item-empty'>
                <p>There are no items in the Cart</p>
                <Link className="directory" to="/">Shop Collections</Link>
              </td>
            </tr>
          ) : (
            cart.map((product, index) => (
              <tr key={product.id} className="table-group-divider">
                <td>{index + 1}</td>
                <td className="table_image"><img src={product.thumbnail} alt={product.title} /></td>
                <td>
                  {product.title}
                  <br />
                  <span>Rs <b>{product.price}/-</b></span>
                </td>
                <td>
                  <div className="quantity">
                    <button className="minus" onClick={() => handleDecrease(product.id)} aria-label="Decrease">&minus;</button>
                    <input type="number" className="input-box" value={product.quantity || 1} min="1" max={product.stock} readOnly />
                    <button className="plus" onClick={() => handleIncrease(product.id)} aria-label="Increase">&#43;</button>
                  </div>
                </td>
                <td>Rs {product.totalPrice || product.price}</td>
                <td><Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="cart-footer">
       
        <p><b>Total Amount : Rs {total} /-</b></p>
        <p><b>Total Quantity: {totalQuantity}</b></p>
        <p>Shipping : Free</p>
      </div>
    </div>
  );
};

export default Viewcart;
