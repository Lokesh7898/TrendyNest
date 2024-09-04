import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    // Additional validations
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be numeric';
    }
    if (formData.zipCode && !/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Zip Code must be 5 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/order-placed');
    }
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <div className="input-group">
            {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            <input
              type="text"
              name="firstName"
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            <input
              type="text"
              name="lastName"
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          {errors.email && <div className="error-message">{errors.email}</div>}
          <input
            type="email"
            name="email"
            placeholder='Email address'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          {errors.street && <div className="error-message">{errors.street}</div>}
          <input
            type="text"
            name="street"
            placeholder='Street'
            value={formData.street}
            onChange={handleChange}
          />
        </div>
        <div className="multi-fields">
          <div className="input-group">
            {errors.city && <div className="error-message">{errors.city}</div>}
            <input
              type="text"
              name="city"
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            {errors.state && <div className="error-message">{errors.state}</div>}
            <input
              type="text"
              name="state"
              placeholder='State'
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="multi-fields">
          <div className="input-group">
            {errors.zipCode && <div className="error-message">{errors.zipCode}</div>}
            <input
              type="text"
              name="zipCode"
              placeholder='Zip Code'
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            {errors.country && <div className="error-message">{errors.country}</div>}
            <input
              type="text"
              name="country"
              placeholder='Country'
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          {errors.phone && <div className="error-message">{errors.phone}</div>}
          <input
            type="text"
            name="phone"
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total's</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
