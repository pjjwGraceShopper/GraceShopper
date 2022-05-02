import React, { useState, useEffect } from "react";
import { getPY } from "../../axios-services/PY_queries";
import CartItem from "./CartItem";
import {
  getUserCart,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
  getUserCartIdxList,
  getUserCartSubTotal,
  addToUserLibrary,
} from "../../axios-services";

//------------------------------------------------------------------
const Cart = ({ me, cartChange, setCartChange }) => {
  //----------------------------------------------------------------
  const [userCart, setUserCart] = useState([{ name: "Nothing Yet!" }]);
  const [subTotal, setSubTotal] = useState({ value: "" });
  const inCart = { ids: {} };

  //-----------------------------------------------------------------
  async function updateDev() {
    if (me.id) {
      setCartChange(Math.random());
    }
  }
  //----------------------------------------------------------------
  async function handleCheckout() {
    addToUserLibrary(me.id, inCart.ids);
    clearCart(me.id);
    setCartChange(Math.random());
  }
  //-----------------------------------------------------------------
  useEffect(() => {
    if (me.id) {
      async function update() {
        const response = await getUserCart(me.id);
        setUserCart(response);
        const fetchSubtotal = await getUserCartSubTotal(me.id);
        setSubTotal({ value: `${fetchSubtotal}` });
        console.log(fetchSubtotal);
      }
      // update();
      update();
    }
  }, [cartChange]);
  //----------------------------------------------------------------
  return (
    <div className="cart-container">
      {/* HEADER */}
      <div className="header">
        <h3 className="heading">Shopping Cart</h3>
        <h5 className="action">Remove all</h5>
      </div>
      {/* HEADER END ^^ */}
      <div className="cart-body">
        {/* LEFT HALF **************************** */}
        <div className="cart-left-container --bs-dark">
          {/* <CartItemList userCart={userCart} cartChange={setCartChange} me={me} /> */}
          {userCart.length
            ? userCart.map((e, i) => (
                <CartItem
                  inCart={inCart}
                  userCart={userCart}
                  elem={e}
                  cartChange={setCartChange}
                  me={me}
                  idx={i}
                />
              ))
            : "Nothing Yet!"}
        </div>
        {/* LEFT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* RIGHT HALF **************************** */}
        <div className="cart-right-container"></div>
        {/* RIGHT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* BOTTOM ****************************** */}
        <div className="cart-bottom-container">
          <button className="btn btn-secondary" onClick={() => updateDev()}>
            update cart
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
          <div>Subtotal: {subTotal.value}</div>
        </div>
        {/* BOTTOM END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      </div>
    </div>
  );
};
//----------------------------------------------------------------
export default Cart;
