import React, { useState, useEffect } from "react";
import { getUserCart, deleteItemFromCart } from "../../axios-services";
//----------------------------------------------------------------
const CartItem = ({ userCart, e, i, cartChange, me }) => {
  //-----------------------------------------------------------

  //--------------------------------------------------------
  useEffect(() => {
    console.log(userCart, "cart item");
  }, [userCart]);
  //-------------------------------------------
  return (
    <div className="card --bs-dark">
      <div>
        <img className="movie-img" src={e.img} key={e + i} alt="movie"></img>
        {e.name}
        {e.price}
      </div>
    </div>
  );
};
//----------------------------------------------------------------
export default CartItem;

// cart.map((e, i) => { return <div className="cart-item" key={i}> {e} </div>; })
