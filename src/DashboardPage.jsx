import React from 'react';
import './DashboardPage.css';

// Navbar for authenticated users
const DashboardNavbar = ({ username, onLogout, onNavigate, cartItemCount }) => (
  <nav className="dashboard-navbar">
    <div className="navbar-brand">FlavorFiesta</div>
    <div className="navbar-user-section">
      <span className="welcome-message">Welcome, {username}!</span>
      <button className="nav-button" onClick={() => onNavigate('cart')}>
        Cart ({cartItemCount})
      </button>
      <button onClick={onLogout} className="nav-button primary">Logout</button>
    </div>
  </nav>
);

const DashboardPage = ({ username, onLogout, restaurants, onNavigate, cartItemCount }) => {
  return (
    <div className="dashboard-page">
      <DashboardNavbar username={username} onLogout={onLogout} onNavigate={onNavigate} cartItemCount={cartItemCount} />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h2>Find Your Favorite Food</h2>
          {/* ... Search bar and categories ... */}
        </header>
        <section className="featured-restaurants">
          <h3>Featured Restaurants</h3>
          <div className="restaurant-grid">
            {restaurants.map(restaurant => (
              // Make the entire card clickable
              <div key={restaurant.id} className="restaurant-card" onClick={() => onNavigate('restaurant', restaurant.id)}>
                <img src={restaurant.img} alt={restaurant.name}/>
                <h4>{restaurant.name}</h4>
                <p>{restaurant.cuisine}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;