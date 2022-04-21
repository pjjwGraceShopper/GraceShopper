import axios from 'axios';
//----------------------------------------------------------------
export async function getUserCart (userid){
    console.log("got to axios layer")
try{
    const data = await axios.get(`/api/cart/${userid}`);
    return data;

} catch (err) {
  console.error(err);
  return err
}
}
//----------------------------------------------------------------