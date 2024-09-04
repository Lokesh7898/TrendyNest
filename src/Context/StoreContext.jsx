import { createContext, useEffect, useState } from "react";
import { food_list } from '.././Assets/assets'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);


  const addToCart = (itemId, name) => {
    if (!cartItems[itemId]) {
      toast.success(`${name} added to cart! `, {
        autoClose: 500,
      });
      return setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId, name) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.error(`${name} removed from cart! `, {
      autoClose: 500,
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find(product => product._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        } else {
          console.error(`Item with ID ${itemId} not found in food_list.`);
        }
      }
    }
    return totalAmount;
  };


  const contextValue = {

    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    selectedProduct,
    setSelectedProduct,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
      <ToastContainer />
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
