import { useState } from "react";
import ShopBox from "./AddingComponent.jsx";

const Layout = () => {
  const [cartItems, setCartItems] = useState({});

  // Add item to cart
  // Keep in order
  const addToCart = (item) => {
    const key = String(item.cartKey);
    setCartItems(prev => ({
        ...prev, [key]: prev[key] ?
        { ...prev[key], quantity: prev[key].quantity + item.quantity }
        : { ...item, quantity: item.quantity }
    }));
};


  // Remove just one item
  const removeOne = (key, quant = 1) => {
    setCartItems(prev => {
      if (prev[key].quantity <= quant) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return { ...prev, [key]: { ...prev[key], quantity: prev[key].quantity - quant } };
    });
  };


  // Remove all of one item
  const removeAll = (key) => {
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  return (
    <div className="stacks">
      <h1 className="title">Fantasy Shop</h1>
      <div className="rows">
        <ShopBox type="shop" addToCart={addToCart} />
        <ShopBox type="cart" cartItems={Object.values(cartItems)}
        cartKeys={Object.keys(cartItems)}
        removeOne={removeOne} removeAll={removeAll} 
        onCheckout={() => setCartItems({})} />
      </div>
    </div>
  );
};

export default Layout;