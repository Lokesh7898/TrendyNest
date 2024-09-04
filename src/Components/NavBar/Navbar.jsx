import React, { useContext } from 'react';
import './Navbar.css';
import logo1 from './RawData/logo1.png';
import groceryStore1 from './RawData/groceryStore1.png';
import loginAvatar1 from './RawData/loginAvatar1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <Link to='/' className="navbar-brand mx-2">
        <img src={logo1} alt="Logo" className="nav-logo" />
      </Link>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>
           <li className="nav-item">
            <Link to='/products' className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to='/cart' className="nav-link">Cart</Link>
          </li>
        </ul>
      </div>
      <form className="d-flex mx-2 my-2 my-lg-0">
        <Link to='/cart' className="btn nav-login" type="button">
          <img src={groceryStore1} alt="Grocery Store" className="nav-login" />
        </Link>
        <button className="btn nav-signup" type="button" onClick={() => setShowLogin(true)}>
          <img src={loginAvatar1} alt="Login Avatar" className="nav-login" />
        </button>
        <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <Link to='/'><span className="fas fa-home"></span></Link> 
      </button>
      </form>
     
    </nav>
  );
};

export default Navbar;
