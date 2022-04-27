const { json } = require('express');
const client = require('../client');


//------------------------------------------------------------------------------
// Json format for input into postgres server   '{"item": 1, "item2": 2}'
async function createUserCart_DB (userid) {
const JSONB = {items: {}, purchase_history: {}};
    const {rows}  = await client.query(`
        INSERT INTO cart (user_cart, items)
        VALUES ( $1 , $2 )
        Returning *;
            `, [userid, JSONB])

    return rows
}
//----------------------------------------------------------------
async function getUserCart_DB (userid) {
    const output = []
try{
    const {rows : [data]}  = await client.query(`
        SELECT items['items']
        FROM cart
        WHERE user_cart = ( $1 ) 
        `, [userid])
    //converts nested Object into array of objects 
    console.log(data.items, "user_cart return")
    Object.keys(data.items).forEach((k,v) => output.push({[k] : data.items[k]}))
    // returns "JSON" of Items [ {}, {} ]
    return output
} catch(err){ throw err}
}
//----------------------------------------------------------------
// Json format for input into postgres server   '{"item": 1, "item2": 2}'
// must include old cart items + new cart items ******

// UPDATES THE **ENTIRE** CART, use with caution
async function updateCart_DB (userid, JSONB) {

    const {rows}  = await client.query(` 
        UPDATE cart 
        SET items = ( $2 )
        WHERE user_cart = ( $1 )
        RETURNING *;
            `, [userid, JSONB])
    
    return rows
}
//----------------------------------------------------------------
async function deleteCartItem_DB (userid, key) {
    const {rows : {newcartlist}} = await client.query(`
    Select items - ( $2 )
    AS newcartlist
    FROM cart
    WHERE user_cart = ( $1 )
    `, [userid, key])
    const result  = await updateCart_DB(userid, newcartlist)

    return result
}
//----------------------------------------------------------------
// Json format for input into postgres server   '{"item": 1, "item2": 2}'
async function addToCartItems_DB (userid, JSONB) {
    const {rows} = await client.query(`
    UPDATE cart
    SET items['items'] = items['items'] || ( $2 )
    where user_cart = ( $1 )
    `, [userid, JSONB])
    return rows
}
//----------------------------------------------------------------    
module.exports = {
    getUserCart_DB, createUserCart_DB, updateCart_DB, deleteCartItem_DB, updateCart_DB, addToCartItems_DB
  };