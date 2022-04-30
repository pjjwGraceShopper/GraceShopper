import React, { useState, useEffect } from "react";
import { getUserCart, deleteItemFromCart } from "../../axios-services";
//----------------------------------------------------------------
const CartItem = ({ userCart, elem, idx, cartChange, me}) => {
  //-----------------------------------------------------------
  
  //--------------------------------------------------------
  useEffect(() => {
    console.log(userCart, "cart item");
  }, [userCart]);
  //-------------------------------------------
  return (
    <div className="card --bs-dark">
       <img className="movie-img" src={elem.img} key={elem + idx} alt="movie"></img>
      <div>
        {elem.name}
        {elem.price}
      </div>
      <button className="btn btn-secondary" onClick={() => deleteItemFromCart}> </button>
    </div>
  );
};
//----------------------------------------------------------------
export default CartItem;

// cart.map((e, i) => { return <div className="cart-item" key={i}> {e} </div>; })
