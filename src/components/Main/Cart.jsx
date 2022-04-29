import React, { useState, useEffect } from "react";
import { getPY } from "../../axios-services/PY_queries";
import CartItem from "./CartItem";
import {
  getUserCart,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
  getUserCartIdxList,
} from "../../axios-services";

//------------------------------------------------------------------
const Cart = ({ me, cartChange, setCartChange }) => {
  //----------------------------------------------------------------
  const [userCart, setUserCart] = useState([{ name: "Nothing Yet!" }]);
  const subTotal = {}
  //-----------------------------------------------------------------
  async function updateDev() {
    if (me.id) {
      setCartChange(Math.random());
    }
  }
  //-----------------------------------------------------------------
  useEffect(() => {
    if (me.id) {
      async function update() {
        const response = await getUserCart(me.id);
        setUserCart(response);
      }
      // update();
      console.log(userCart);
      update();
    }
  }, [cartChange]);
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
        <div className="cart-left-container --bs-dark">
          {/* <CartItemList userCart={userCart} cartChange={setCartChange} me={me} /> */}
          {userCart.length
            ? userCart.map((e, i) => (<CartItem userCart={userCart} elem={e}cartChange={setCartChange} me={me} idx={i} subTotal={subTotal} /> ))
            : "Nothing Yet!"}
        </div>
        {/* LEFT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* RIGHT HALF **************************** */}
        <div className="cart-right-container">
          {/* <span> subtotal: {subTotal.sum} </span> */}
        </div>
        {/* RIGHT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

        {/* BOTTOM ****************************** */}
        <div className="cart-bottom-container">
         
         
          <button className="btn btn-secondary" onClick={() => updateDev()}>
            update cart
          </button>
          <button className="btn btn-secondary" onClick={() => updateDev()}>
            Checkout
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
