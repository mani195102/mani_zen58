import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';

const ViewCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Redux Happy Cart !!!</h2>
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
              <td colSpan="6" className="cart-item-empty">
                <p>There are no items in the Cart</p>
                <Link className="directory" to="/">Shop Collections</Link>
              </td>
            </tr>
          ) : (
            cart.map((product, index) => (
              <tr key={product.id} className="table-group-divider">
                <td>{index + 1}</td>
                <td className="table-image"><img src={product.thumbnail} alt={product.title} /></td>
                <td>
                  {product.title}
                  <br />
                  <span>Rs <b>{product.price}/-</b></span>
                </td>
                <td>
                  <div className="quantity">
                    <button className="minus" onClick={() => dispatch(decreaseQuantity(product.id))} aria-label="Decrease">&minus;</button>
                    <input type="number" className="input-box" value={product.quantity || 1} min="1" max={product.stock} readOnly />
                    <button className="plus" onClick={() => dispatch(increaseQuantity(product.id))} aria-label="Increase">&#43;</button>
                  </div>
                </td>
                <td>Rs {product.totalPrice || product.price * product.quantity}</td>
                <td><Button variant="danger" onClick={() => dispatch(removeFromCart(product.id))}>Delete</Button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="cart-footer">
        <p><b>Total Amount: Rs {total} /-</b></p>
        <p><b>Total Quantity: {totalQuantity}</b></p>
        <p>Shipping: Free</p>
      </div>
    </div>
  );
};

export default ViewCart;
