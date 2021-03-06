import axios from 'axios';
//----------------------------------------------------------------
export async function getUserCart (userid){
try{
  const {data}= await axios.get(`/api/cart/${userid}`)
    return data;
} catch (err) {
  console.error(err, "axios error");
  return err
}
}
//----------------------------------------------------------------
export async function getUserCartIdxList (userid){
  try{
    const {data}= await axios.get(`/api/cart/${userid}/idx`)
      return data;
  } catch (err) {
    console.error(err, "axios error");
    return err
  }
  }
//----------------------------------------------------------------
export async function addItemToCart (userid, item) {
  try{ 
    const {data}= await axios.post(`/api/cart/${userid}/add`, {item: item} )
    return data;
  } catch (err) {
    console.error(err, "axios error");
    return err
  }
}
//----------------------------------------------------------------
export async function deleteItemFromCart (userid, key) {
  try{ 
    const data = await axios.post(`/api/cart/${userid}/delete`, {item: key})
    return data;
  } catch (err) {
    console.error(err, "axios error");
    return err
  }
}
//----------------------------------------------------------------
export async function clearCart (userid) {
  try{ 
    const data = await axios.post(`/api/cart/${userid}/clear`,)
  }catch (err) {
    console.error(err, "axios error");
    return err
  }
}
//----------------------------------------------------------------
export async function createUserCart (userid) {
  try{ 
    const data = await axios.post(`/api/cart/${userid}/create`,)
  }catch (err) {
    console.error(err, "axios error");
    return err
  }
}
//----------------------------------------------------------------
export async function getUserCartSubTotal(userid){
  try{
    const {data}= await axios.get(`/api/cart/${userid}/subtotal`)
      return data;
  } catch (err) {
    console.error(err, "axios error");
    return err
  }
  }