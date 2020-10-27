import React from 'react';
import './App.css';
import './assets/styles/header.styles.scss';
import './assets/styles/cart-icon.styles.scss';
import Logo from './assets/crown.svg';
import Bag from './assets/shopping-bag-2.svg';
import Menu from './components/menu-item.component';

const App = () => (
  <div className="homepage">
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt=""/>
      </div>
      <div className="options">
        <div className="option"><span>SHOP</span></div>
        <div className="option"><span>CONTACT</span></div>
        <div className="option"><span>SIGN IN</span></div>
        <div className="cart-icon">
          <img className='shopping-icon' src={Bag} alt=""/>
          <span className='item-count'>0</span>
        </div>
      </div>
    </div>
    <Menu/>
  </div>

);

export default App;

