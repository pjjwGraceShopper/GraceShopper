const client = require('../client');
//----------------------------------------------------------------
const createUserLibrary_DB = async (userid) => {

    const JSONB = {};
    try {
        const {
            rows
        } = await client.query(`
                INSERT INTO userlibrary (user_lib, items)
                VALUES ( $1 , $2 )
                RETURNING *;
                `, [userid, JSONB])
        return rows
    } catch (err) {
        throw err
    }
}
//----------------------------------------------------------------
const getUserLibrary_DB = async (userid) => {
    try {
        const {
            rows
        } = await client.query(`
    SELECT name,type,genre,length,price,img FROM idxlib
    JOIN ( 
       Select JSONB_OBJECT_KEYS(items) 
       AS myLibrary
       FROM userlibrary
       WHERE user_lib = ( $1 )
       ) cart
    ON myLibrary::int = idxlib.id
        `, [userid])
        return rows
    } catch (err) {
        throw err
    }
}
//----------------------------------------------------------------
async function addToUserLibrary_DB(userid, JSONB = {}) {
    try {
        const {
            rows
        } = await client.query(`
    UPDATE userlibrary 
    SET items = COALESCE(items || ( $2 ))
    WHERE user_lib = ( $1 )
    `, [userid, JSONB])
        return rows
    } catch (err) {
        throw err
    }
}
//----------------------------------------------------------------
module.exports = {
    createUserLibrary_DB,
    getUserLibrary_DB,
    addToUserLibrary_DB
}