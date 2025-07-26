import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, onRemoveFromCart, onNavigate }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                  <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <button className="checkout-btn" onClick={() => onNavigate('checkout')}>Proceed to Checkout</button>
            </div>
          </>
        )}
        <button className="back-btn" onClick={() => onNavigate('dashboard')}>← Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartPage;