import React, { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../Assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ id, name, price, description, image }) => {

    // const [itemCount,setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, setSelectedProduct } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleItemClick = () => {
        setSelectedProduct({ id, name, price, description, image });
        navigate('./product-details');
    }

    return (
        <div className='food-item' onClick={handleItemClick}>
            <div className='food-item-img-container' >
                <img src={image} className='food-item-image' alt="" />
                {!cartItems[id] ? (<img className='add' onClick={(e) => { e.stopPropagation(); addToCart(id, name); }} src={assets.add_icon_white} alt="" />
                ) : (<div className='food-item-counter'>
                    <img onClick={(e) => { e.stopPropagation(); removeFromCart(id, name); }} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={(e) => { e.stopPropagation(); addToCart(id, name); }} src={assets.add_icon_green} alt="" />
                </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
