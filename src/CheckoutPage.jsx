import React from 'react';
import './CheckoutPage.css';

const CheckoutPage = ({ cartItems, onNavigate, onCheckoutSuccess }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleConfirmPayment = (event) => {
    event.preventDefault();
    alert('Payment successful! Thank you for your order.');
    onCheckoutSuccess(); // Clear the cart
    onNavigate('dashboard'); // Go back to the dashboard
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <hr/>
          <div className="summary-total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <form className="payment-form" onSubmit={handleConfirmPayment}>
          <h3>Payment Information</h3>
          <div className="form-group">
            <label>Cardholder Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
          </div>
          <button type="submit" className="confirm-payment-btn">Confirm Payment</button>
        </form>
        <button className="back-btn" onClick={() => onNavigate('cart')}>← Back to Cart</button>
      </div>
    </div>
  );
};

export default CheckoutPage;