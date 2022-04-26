import React, {useState, useEffect} from "react";
import {getUserCart, addItemToCart, deleteItemFromCart, clearCart } from "../../axios-services"

const UCart = ({me}) => {
const [cart, setCart] = useState([])

// clearCart(2)

useEffect(() => {
    if (me.id){
        console.log("is me:", me )
        async function cartFetch (){
        const uCart = await getUserCart(me.id)
        console.log(uCart, "ucart**")
        setCart([uCart])
        await addItemToCart(me.id, {'item1337': `leetItem`, 'item69': `deleteItemFromCart` })
        await deleteItemFromCart(me.id,'item69')
}
cartFetch()
    }
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