import React from 'react';
import './LandingPage.css';

// You can find high-quality free food images on sites like Unsplash, Pexels, or Freepik.
// For example, using a placeholder image from Pexels.
const heroImageUrl = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

// --- Components for each section ---

const Navbar = ({ onNavigate }) => (
  <nav className="navbar">
    <div className="navbar-brand">FlavorFiesta</div>
    <div className="navbar-links">
      <button onClick={() => onNavigate('login')} className="nav-button">Login</button>
      <button onClick={() => onNavigate('register')} className="nav-button primary">Sign Up</button>
    </div>
  </nav>
);

const Hero = ({ onNavigate }) => (
  <section className="hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Meal</h1>
        <p>From local kitchens to your table. Fresh, fast, and unforgettable.</p>
        <button onClick={() => onNavigate('register')} className="cta-button">Get Started Now</button>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="features">
    <div className="feature-item">
      <h3>Explore Cuisines</h3>
      <p>Find a diverse range of dishes from around the world.</p>
    </div>
    <div className="feature-item">
      <h3>Easy Ordering</h3>
      <p>A seamless and intuitive ordering process.</p>
    </div>
    <div className="feature-item">
      <h3>Fast Delivery</h3>
      <p>Get your favorite food delivered right to your doorstep, hot and fresh.</p>
    </div>
  </section>
);

const Gallery = () => (
  <section className="gallery">
    <h2>A Taste of What We Offer</h2>
    <div className="gallery-grid">
      {/* Replace these with actual image URLs */}
      <div className="gallery-item"><img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pasta"/></div>
      <div className="gallery-item"><img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pancakes"/></div>
      <div className="gallery-item"><img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Salad"/></div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-item">
      <p>"This is the best food app I've ever used! So many options and so easy to navigate."</p>
      <span>- Alex P.</span>
    </div>
    <div className="testimonial-item">
      <p>"The delivery was surprisingly fast, and the food was delicious. Highly recommended!"</p>
      <span>- Maria S.</span>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 FlavorFiesta. All rights reserved.</p>
  </footer>
);

// --- The main LandingPage component ---

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      <Navbar onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <Features />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;