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
export async function deleteItemFromCart (userid, item) {
  try{ 
    const data = await axios.post(`/api/cart/${userid}/delete`, {item: item})
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
