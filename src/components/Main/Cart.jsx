import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
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
  const Navigate = useNavigate()
  const inCart = { ids: {} };
  //----------------------------------------------------------------
  //-----------------------------------------------------------------
  useEffect(() => {
    if (me.id) {
      async function update() {
        const response = await getUserCart(me.id);
        setUserCart(response);
        const fetchSubtotal = await getUserCartSubTotal(me.id);
        setSubTotal({ value: `${fetchSubtotal}` });
        
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
        <h3 className="heading">BlueBox</h3>
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
        <div className="cart-right-container card">
           <h5>Subtotal: {subTotal.value}</h5>
           <h5>Tax: 0% </h5>
           <h5>Discount: 100% </h5>
           <h5>Total: $0 </h5>
        </div>
        {/* RIGHT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        </div>
        {/* BOTTOM ****************************** */}
        <div className="cart-bottom-container">
          <button
            className="btn btn-secondary"
            onClick={() => Navigate('/Checkout')}
          >
           Go to Checkout
          </button>
         
        </div>
        {/* BOTTOM END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
       
    </div>
  );
};
//----------------------------------------------------------------
export default Cart;
