import React, {useState, useEffect} from "react";
import {getUserCart} from "../../axios-services/index"

const UCart = (props, context) => {
const [cart, setCart] = useState(null)  
    
useEffect(() => {
async function cartFetch (){
const ucart = await getUserCart(1)
console.log(ucart, "ucart**")
setCart(ucart)
}
cartFetch()
}, [])

    return (
        <div className="cart-container">
            {/* user cart Contains: {`${cart}`} */}

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

export default UCart