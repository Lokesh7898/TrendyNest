import React from 'react';
import './OrderPlaced.css';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                </div>
                <div className="modal-body">
                    <h2 className="success-message">Order placed successfully!</h2>
                    <p className='updates'>You will get updates on your e-mail account.</p>
                    <Link className="track-order-button" to='/'>Close</Link>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;
