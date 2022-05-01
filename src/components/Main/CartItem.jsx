import React, { useState, useEffect } from "react";
import { getUserCart, deleteItemFromCart } from "../../axios-services";
//----------------------------------------------------------------
const CartItem = ({ userCart, elem, idx, cartChange, me, inCart}) => {
  //-----------------------------------------------------------
  inCart.ids[elem.id] = elem.price
  //--------------------------------------------------------
  useEffect(() => {
    console.log(userCart, "cart item");
  }, [userCart]);
  //-------------------------------------------
  return (
    <div className="cart-item-container card --bs-dark">
       <img className="movie-img" src={elem.img} key={elem + idx} alt="movie"></img>
      <div key={elem.id}>
        {elem.name}
        {elem.price}
      </div>
      <button className="btn btn-secondary" onClick={() => {deleteItemFromCart(me.id, elem.id); setCartChange(Math.random())}}> Remove Item </button>
    </div>
  );
};
//----------------------------------------------------------------
export default CartItem;

// cart.map((e, i) => { return <div className="cart-item" key={i}> {e} </div>; })
