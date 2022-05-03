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
    const [cReturn, setCReturn] = useState([])
    const inCart = { ids: {} };
//----------------------------------------------------------------
    async function handleCheckout(){
        const response = await submitPayment()
        addToUserLibrary(me.id, inCart.ids);
        setCReturn(response)
        clearCart(me.id);
        setIsCheckedOut(true)
        setCartChange(Math.random());
    }
//----------------------------------------------------------------
    async function finalizeCheckout(){
      
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
                <div className="checkout-final">
                <small>{cReturn.status}</small> 
                    <small>{cReturn.receipt_url}</small> 

                </div>
               
                </div>}
        </div>
    )


}
//----------------------------------------------------------------
export default Checkout