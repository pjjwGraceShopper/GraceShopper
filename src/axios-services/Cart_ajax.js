import axios from 'axios';
//----------------------------------------------------------------
export async function getUserCart (userid){
console.log('getting to axios layer')
try{
  const response = await axios.get(`api/cart/${userid}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"}
  })
  console.log(response, "axios Response")
    // const data = await response.json
    // console.log(data)
    // return data;
} catch (err) {
  console.error(err, "axious error");
  return err
}
}
//----------------------------------------------------------------