const {
    json
} = require('express');
const client = require('../client');


//------------------------------------------------------------------------------
// Json format for input into postgres server   '{"item": 1, "item2": 2}'
async function createUserCart_DB(userid) {
    const JSONB = {};
    try {
        const {
            rows
        } = await client.query(`
            INSERT INTO cart (user_cart, items)
            VALUES ( $1 , $2 )
            Returning *;
            `, [userid, JSONB])

        return rows
    } catch (err) {
        throw err
    }
}
//-----------------------------------------------------------------
async function getUserCartIdx_DB(userid) {
    const output = []
    try {
        const {
            rows: data
        } = await client.query(`
            Select JSONB_OBJECT_KEYS(items)::int
            AS cartlist
            FROM cart
            WHERE user_cart = 2;     
        `, [userid])
        //converts nested Object into array of objects 
        // Object.keys(data.items).forEach((k, v) => output.push({
        //     [k]: data.items[k]
        // }))
        // returns "JSON" of Items [ {}, {} ]
        return data
    } catch (err) {
        throw err
    }
}

//----------------------------------------------------------------
async function getUserCart_DB(userid) {
    const output = []
    try {
        const {
            rows: data
        } = await client.query(`
    Select name,type,genre,length,price,img FROM idxlib
    JOIN ( 
       Select JSONB_OBJECT_KEYS(items) 
       AS cartList
       FROM cart
       WHERE user_cart = ( $1 )
       ) cart
    ON cartList::int = idxlib.id
        `, [userid])
        //converts nested Object into array of objects 
       
        // Object.keys(data.items).forEach(k => output.push({
        //     [k]: data.items[k]
        // }))
        // returns "JSON" of Items [ {}, {} ]
        return data
    } catch (err) {
        throw err
    }
}
//----------------------------------------------------------------
// Json format for input into postgres server   '{"item": 1, "item2": 2}'
// must include old cart items + new cart items ******

// UPDATES THE **ENTIRE** CART, use with caution
async function updateCart_DB(userid, JSONB) {
    try {
        const {
            rows
        } = await client.query(` 
        UPDATE cart 
        SET items = ( $2 )
        WHERE user_cart = ( $1 )
        RETURNING *;
    `, [userid, JSONB])
        return rows
    } catch (err) {
        throw err
    }
}
//----------------------------------------------------------------
async function deleteCartItem_DB(userid, key) {
    const {
        rows: {
            newcartlist
        }
    } = await client.query(`
        Select items - ( $2 )::text 
        AS cartList
        FROM cart
        WHERE user_cart = ( $1 )
    `, [userid, key])
    const result = await updateCart_DB(userid, newcartlist)
    return result
}
//----------------------------------------------------------------
// Json format for input into postgres server   '{"IDXLIB.KEY": 1, "IDXLIB.KEY": 2}'
async function addToCartItems_DB(userid, JSONB) {
    const {
        rows
    } = await client.query(`
    UPDATE cart
    SET items = COALESCE(items || ( $2 ))
    where user_cart = ( $1 )
    `, [userid, JSONB])
    return rows
}
//----------------------------------------------------------------
async function getUserCartSubTotal_DB(userid) {
    try {
        const {
            rows : [rows]
        } = await client.query(` 
        Select SUM(price) FROM idxlib
    JOIN ( 
       Select JSONB_OBJECT_KEYS(items) 
       AS cartList
       FROM cart
       WHERE user_cart = ( $1 )
       ) cart
    ON cartList::int = idxlib.id
    `, [userid])
        return rows.sum
    } catch (err) {
        throw err
    }
}
//----------------------------------------------------------------    
module.exports = {
    getUserCart_DB,
    createUserCart_DB,
    updateCart_DB,
    deleteCartItem_DB,
    updateCart_DB,
    addToCartItems_DB,
    getUserCartIdx_DB,
    getUserCartSubTotal_DB
};