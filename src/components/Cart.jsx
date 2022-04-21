import React from "react";
import {getUserCart} from "../axios-services/Cart_ajax"

const Cart = (props, context) => {
    
    

 const userCart = getUserCart(1)


    return (
        <div className="cart-container">
            user cart Contains: {`${userCart}`}

            <div className="cart-left-container">
                im on the left

                <div className="cart-item-container">
                    im an item
                </div>


            </div>

            <div className="cart-right-container">
            im on the right

                <div className="cart-summary-item">
                    im an item
                </div>

            </div>

            <div className="cart-bottom-container">
            im on the bottom of left and right
            </div>

        </div>
    )
}

export default Cart