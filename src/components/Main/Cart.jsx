import React, { useState, useEffect } from "react";
import {
  getUserCart,
  addItemToCart,
  deleteItemFromCart,
  clearCart,
} from "../../axios-services";

const UCart = (props, context) => {
  const [cart, setCart] = useState([]);

  // clearCart(2)

  useEffect(() => {
    async function cartFetch() {
      const uCart = await getUserCart(1);
      console.log(uCart, "ucart**");
      setCart([uCart]);
      await addItemToCart(2, {
        item1337: `leetItem`,
        item69: `deleteItemFromCart`,
      });
      await deleteItemFromCart(2, "item69");
    }
    cartFetch();
  }, []);

  return (
    <div className="cart-body">
        <div className="cart-container">
            <div className="header">
                <h3 className="heading">Shopping Cart</h3>
                <h5 className="action">Remove all</h5>
            </div>
                    user cart Contains:
                    <div className="cart-left-container">
                        <div className=""></div>
                        im on the left
                         <div className="cart-item-container">im an item</div>
                    </div>
                            <div className="cart-right-container">
                                im on the right
                                    <div className="cart-summary-item">im an item</div>
                            </div>
                                        <div className="cart-bottom-container">
                                            im on the bottom of left and right
                                        </div>
            </div>
    </div>
  );
};

export default UCart;
