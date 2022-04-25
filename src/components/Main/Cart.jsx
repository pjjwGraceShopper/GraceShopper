import React, {useState, useEffect} from "react";
import {getUserCart, addItemToCart, deleteItemFromCart} from "../../axios-services"

const UCart = (props, context) => {
const [cart, setCart] = useState([])

    
useEffect(() => {
async function cartFetch (){
const uCart = await getUserCart(1)
console.log(uCart, "ucart**")
setCart([uCart])
await addItemToCart(2, {'item1337': `leetItem`, 'item69': `deleteItemFromCart` })
await deleteItemFromCart(2,'item69')
}
cartFetch()

}, [])


    return (
        <div className="cart-container">
            user cart Contains: 

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