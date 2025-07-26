import React, { useState, useEffect } from 'react';

// Import all your page components
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import DashboardPage from './DashboardPage';
import RestaurantPage from './RestaurantPage'; // New
import CartPage from './CartPage';             // New
import CheckoutPage from './CheckoutPage';       // New
import ToastNotification from './ToastNotification'; // New

// --- Mock Data: In a real app, this would come from a backend API ---
const mockRestaurants = [
  { id: 1, name: 'The Golden Spoon', cuisine: 'Italian, Mediterranean', img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600', menu: [{id: 101, name: 'Spaghetti Carbonara', price: 15.99}, {id: 102, name: 'Margherita Pizza', price: 12.50}, {id: 103, name: 'Greek Salad', price: 9.00}] },
  { id: 2, name: 'Spice Route', cuisine: 'Indian, Curries', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600', menu: [{id: 201, name: 'Butter Chicken', price: 14.00}, {id: 202, name: 'Palak Paneer', price: 12.00}, {id: 203, name: 'Garlic Naan', price: 3.50}] },
  { id: 3, name: 'Tokyo Bites', cuisine: 'Japanese, Sushi', img: 'https://images.pexels.com/photos/67468/sushi-salmon-herbs-food-67468.jpeg?auto=compress&cs=tinysrgb&w=600', menu: [{id: 301, name: 'California Roll', price: 8.00}, {id: 302, name: 'Spicy Tuna Roll', price: 9.50}, {id: 303, name: 'Miso Soup', price: 2.50}] },
];
// --- End Mock Data ---

function App() {
  // --- STATE MANAGEMENT ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // NEW: More detailed page navigation state
  const [page, setPage] = useState({ currentPage: 'landing', data: null }); // e.g., { currentPage: 'restaurant', data: 1 }
  // NEW: State for the shopping cart
  const [cartItems, setCartItems] = useState([]);
  // NEW: State for the notification
  const [notification, setNotification] = useState({ message: '', visible: false });


  // --- FUNCTIONS ---
  const handleLoginSuccess = () => setIsAuthenticated(true);
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPage({ currentPage: 'landing', data: null }); // Reset on logout
  };

  // NEW: Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    showNotification(`Added ${item.name} to cart!`);
  };

  // NEW: Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  // NEW: Function to show a notification
  const showNotification = (message) => {
    setNotification({ message, visible: true });
  };
  
  // NEW: Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // --- PAGE ROUTING LOGIC ---
  const navigate = (newPage, data = null) => {
    setPage({ currentPage: newPage, data });
  };

  // --- RENDER LOGIC ---
  const renderPage = () => {
    if (isAuthenticated) {
      // Logged-in user routes
      switch (page.currentPage) {
        case 'restaurant':
          const restaurant = mockRestaurants.find(r => r.id === page.data);
          return <RestaurantPage restaurant={restaurant} onAddToCart={addToCart} onNavigate={navigate} cartItemCount={cartItems.length} onLogout={handleLogout}/>;
        case 'cart':
          return <CartPage cartItems={cartItems} onRemoveFromCart={removeFromCart} onNavigate={navigate} />;
        case 'checkout':
          return <CheckoutPage cartItems={cartItems} onNavigate={navigate} onCheckoutSuccess={clearCart} />;
        default:
          return <DashboardPage username="Casey" onLogout={handleLogout} restaurants={mockRestaurants} onNavigate={navigate} cartItemCount={cartItems.length} />;
      }
    } else {
      // Guest user routes
      switch (page.currentPage) {
        case 'login':
          return <LoginPage onSwitch={() => navigate('register')} onLoginSuccess={handleLoginSuccess} />;
        case 'register':
          return <RegisterPage onSwitch={() => navigate('login')} onRegisterSuccess={handleLoginSuccess} />;
        default:
          return <LandingPage onNavigate={navigate} />;
      }
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <ToastNotification 
        message={notification.message} 
        isVisible={notification.visible}
        onClose={() => setNotification({ message: '', visible: false })}
      />
    </div>
  );
}

export default App;