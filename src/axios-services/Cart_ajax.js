import axios from 'axios';
//----------------------------------------------------------------
export async function getUserCart (userid){
try{
  const {data}= await axios.get(`/api/cart/${userid}`)
    return data[0];
} catch (err) {
  console.error(err, "axious error");
  return err
}
}
//----------------------------------------------------------------