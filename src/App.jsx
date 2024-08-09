import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';
import Team from './components/Team';
import Assesories from './components/Assesories';
import ContactForm from './components/Contact';
import { CartProvider } from './components/CartContext'; 

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartProvider>
      <Router>
        <Header />
        <Home />
        <Products />
        {isCartVisible && <Cart />}
        <Team />
        <Assesories />
        <ContactForm />
        <Footer />
        <CartIcon toggleCartVisibility={toggleCartVisibility} />
      </Router>
    </CartProvider>
  );
}

export default App;
