
// async function testing() {
// const output = []
// const response = {"items":{"item1":5,"item2":6}}
// Object.keys(response.items).forEach((k,v) => output.push({[k] : response.items[k]}))
// console.log(output)
// }
// testing()

const {cartDB} = require('../db');

const query = {}
async function testQuery() {
const response = await cartDB.getUserCart_DB(2)
return query += response
}
testQuery()
setTimeout(() => console.log(query),200)


