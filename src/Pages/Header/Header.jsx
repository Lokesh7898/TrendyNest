import React from 'react';
import './Header.css';
import eCommerce from './RawData/eCommerce.jpg';
import logo1 from './RawData/logo1.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="content">
        <h1>Elevate Your Style and Comfort</h1>
        <p>Explore <span className='app-name'> TrendyNest </span>for stylish, high-quality finds that blend modern trends with ultimate comfort, all delivered right to your door.</p>
        <button className='home-Menu-Btn'>View Menu</button>
      </div>
      <div className="image-container">
        <img src={eCommerce} alt="eCommerce" className="bg-image" />
        <div className="bounce-container">
          <img src={logo1} alt="Bouncing Logo" className="bouncing-image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
