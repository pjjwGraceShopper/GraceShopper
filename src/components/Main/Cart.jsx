import React, { useState, useEffect } from "react";
import {
  getUserCart,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
} from "../../axios-services";


const Cart = ({ me, cartChange, setCartChange}) => {
  const [cart, setCart] = useState([]);

  // clearCart(me.id)
console.log(me)
  useEffect(() => {
    async function cartFetch() {
      const userCart = await getUserCart(me.id);
      console.log(userCart, "this cart is user's cart**");
      setCart([userCart]);
      await addItemToCart(me.id, {
        item1337: `leetItem`,
        item69: `deleteItemFromCart`,
      });
      await deleteItemFromCart(me.id, "item69");
    }
    if (me.id) {
      cartFetch();
      setCartChange(false);
    }
}, [cartChange, me]);





  return (
    <div className="cart-container">

<div className="header">
                <h3 className="heading">Shopping Cart</h3>
                <h5 className="action">Remove all</h5>
            </div>



      user cart Contains:
      {/* {cart.length
        ? cart.map((e, i) => {
            return <div key={i + e}>{e}</div>;
          })
        : null} */}




        
      <div className="cart-left-container">
        im on the left
        <div className="cart-item-container">im an item</div>
      </div>
      <div className="cart-right-container">
        im on the right
        <div className="cart-summary-item">im an item</div>
      </div>
      <div className="cart-bottom-container">
        im on the bottom of left and right
        <button className="template-button" 
            onClick={()=> { 
                    addItemToCart(me.id, {item1337v2: `leetItemButBetter`})
                    setCartChange(true)}}> 
        </button>
      </div>
    </div>
  );
};


export default Cart;
