import React, { useState, useEffect } from "react";
import { getPY } from "../../axios-services/PY_queries";
import Cart_Item from "./Cart_Item";
import {
  getUserCart,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
} from "../../axios-services";

//----------------------------------------------------------------
const Cart = ({ me, cartChange, setCartChange }) => {
  //----------------------------------------------------------------
  const [test, setTest] = useState(null)
  const userCart =  {
    response: null,
    cart: [],
    addItemToCart,
    deleteItemFromCart,
    clearCart,
  }
async function updateDev () {
  if (me.id) {
      const response = await getUserCart(me.id);
     
      setCartChange(true)
      // userCart.response = response.items
      setTest(Math.random())
      userCart.cart = [response.items]
      setCartChange(false)
      console.log(userCart.cart)

  }
}
 //----------------------------------------------------------------

  return (
    <div className="cart-body">
      <div className="cart-container">

        {/* HEADER */}
        <div className="header">
          <h3 className="heading">Shopping Cart</h3>
          <h5 className="action">Remove all</h5>
        </div>
        {/* HEADER END ^^ */}

        {/* LEFT HALF **************************** */}
        <div className="cart-left-container">
          <div className="cart-item-container">
            {/* {setTimeout(() => } */}
            {/* {cart ? cart.items.item69 : null} */}
            {/* <Cart_Item cart={cart}/>  */}
            {userCart.cart.map((e,i) => {return ( <div key={e + i}> {e} </div>) })}
          </div>
        </div>
        {/* LEFT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
 
        <div className="cart-right-container">
          <div className="cart-summary-item">im an item</div>
        </div>
        {/* RIGHT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

        {/* BOTTOM ****************************** */}
        <div className="cart-bottom-container">
          <button
            className="btn btn-secondary"
            onClick={() => {
              addItemToCart(me.id, { item1337v2: `leetItemButBetter` });
              setCartChange(true);
            }}
          > new item</button>
           <button
            className="btn btn-secondary"
            onClick={() => updateDev()}>
              update page
            </button>
        </div>
        {/* BOTTOM END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

      </div>
    </div>
  );
};
//----------------------------------------------------------------
export default Cart;



// Dev testing / Notes
   // await addItemToCart(me.id, {
      //   item1337: `leetItem`,
      //   item69: `deleteItemFromCart`,
      // });
      // await deleteItemFromCart(me.id, "item69");