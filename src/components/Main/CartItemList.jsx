import React, { useState, useEffect } from "react";
import {
  getUserCart,
  deleteItemFromCart,
} from "../../axios-services";
//----------------------------------------------------------------
const CartItemList = ({ userCart, cartChange, me }) => {
  //-----------------------------------------------------------

  //--------------------------------------------------------
  useEffect(() => {
 console.log(userCart.cart, "cart list")
  }, [userCart.cart]);
  //-------------------------------------------
  return (
    <div className="card --bs-dark">
      list
   
    </div>
  );
};
//----------------------------------------------------------------
export default CartItemList;

// cart.map((e, i) => { return <div className="cart-item" key={i}> {e} </div>; })
