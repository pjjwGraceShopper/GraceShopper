import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import {
  getUserCart,
  clearCart,
  getUserCartIdxList,
  getUserCartSubTotal,
  addToUserLibrary,
  submitPayment
} from "../../axios-services";
//------------------------------------------------------------------
const Checkout = ({ me, cartChange, setCartChange }) => {
    const [isCheckedOut, setIsCheckedOut] = useState(false)
    const inCart = { ids: {} };
//----------------------------------------------------------------
    async function handleCheckout(){
        const response = await submitPayment()
        console.log(response)
    }
//----------------------------------------------------------------
    async function finalizeCheckout(){
        addToUserLibrary(me.id, inCart.ids);
        clearCart(me.id);
        setCartChange(Math.random());
        setIsCheckedOut(true);
    }
//----------------------------------------------------------------

useEffect(() => {
  console.log('test')
  }, [isCheckedOut]);
//----------------------------------------------------------------
    return(
        <div className="Checkout-container">
            {/* main container ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {!isCheckedOut ? 
            <div className="checkout-sub-container">
            <div className="checkout-price"></div>
            <form className="checkout-form form-control">
                <input type="checkbox" className="checkout-checkbox"></input>
                <small className="checkbox-label">I love this site!</small>
                <input type="checkbox" className="checkout-checkbox"></input>
                <small className="checkbox-label">I like to add these to my Library</small>
                </form> 
            <button className="bit btn-secondary" onClick={()=> handleCheckout()}>
                Checkout
            </button> 
            </div> :
            // OR ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
            <div className="checkout-sub-container">
                <button onClick={() => finalizeCheckout()}> Go back </button>
                </div>}
        </div>
    )


}
//----------------------------------------------------------------
export default Checkout