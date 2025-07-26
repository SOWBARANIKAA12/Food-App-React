import React from 'react';
import './RestaurantPage.css';

// A dynamic navbar for the restaurant and other internal pages
const InternalNavbar = ({ onNavigate, cartItemCount, onLogout }) => (
  <nav className="dashboard-navbar">
    <div className="navbar-brand" onClick={() => onNavigate('dashboard')} style={{cursor: 'pointer'}}>FlavorFiesta</div>
    <div className="navbar-user-section">
      <button className="nav-button" onClick={() => onNavigate('cart')}>
        Cart ({cartItemCount})
      </button>
      <button onClick={onLogout} className="nav-button primary">Logout</button>
    </div>
  </nav>
);

const RestaurantPage = ({ restaurant, onAddToCart, onNavigate, cartItemCount, onLogout }) => {
  if (!restaurant) return <div>Restaurant not found.</div>;

  return (
    <div className="restaurant-page">
      <InternalNavbar onNavigate={onNavigate} cartItemCount={cartItemCount} onLogout={onLogout} />
      <header className="restaurant-header" style={{backgroundImage: `url(${restaurant.img})`}}>
        <div className="restaurant-header-overlay">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisine}</p>
        </div>
      </header>
      <main className="menu-container">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {restaurant.menu.map(item => (
            <div key={item.id} className="menu-item-card">
              <h4>{item.name}</h4>
              <p className="item-price">${item.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => onAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <button className="back-btn" onClick={() => onNavigate('dashboard')}>← Back to Dashboard</button>
      </main>
    </div>
  );
};

export default RestaurantPage;