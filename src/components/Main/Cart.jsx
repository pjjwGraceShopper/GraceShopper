import React, { useState, useEffect } from "react";
import { getPY } from "../../axios-services/PY_queries";
import CartItemList from "./CartItemList";
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
  const [userCart, setUserCart] = useState([{ name: "message" }]);
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
    <div className='cart-body'>
      <div className='cart-container'>
        {/* HEADER */}
        <div className='header'>
          <h3 className='heading'>Shopping Cart</h3>
          <h5 className='action'>Remove all</h5>
        </div>
        {/* HEADER END ^^ */}

        {/* LEFT HALF **************************** */}
        <div className='cart-left-container --bs-dark'>
          {/* <CartItemList userCart={userCart} cartChange={setCartChange} me={me} /> */}
          {userCart.map((e, i) => (
            <div key={i} className='card'>
              {" "}
              {"random"}{" "}
            </div>
          ))}
        </div>
        {/* LEFT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

        <div className='cart-right-container'></div>
        {/* RIGHT END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

        {/* BOTTOM ****************************** */}
        <div className='cart-bottom-container'>
          <button
            className='btn btn-secondary'
            onClick={() => {
              addItemToCart(me.id, {
                2: "test",
              });
              setCartChange(Math.random());
            }}
          >
            new item
          </button>
          <button className='btn btn-secondary' onClick={() => updateDev()}>
            update page
          </button>
          <button
            className='btn btn-secondary'
            onClick={() => deleteItemFromCart(me.id, { 2: "test" })}
          >
            delete temp
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
