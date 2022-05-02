import axios from 'axios';
//----------------------------------------------------------------
export async function getMyLibrary (userid){
try{
  const {data}= await axios.get(`/api/mylibrary/${userid}`)
    return data;
} catch (err) {
  console.error(err, "axios error");
  return err
}
}
//----------------------------------------------------------------
export async function createUserLibrary(userid){
    try{
      const {data}= await axios.post(`/api/mylibrary/${userid}/create`)
        return data;
    } catch (err) {
      console.error(err, "axios error");
      return err
    }
    }
//----------------------------------------------------------------
export async function addToUserLibrary(userid, items){
   
    try{
      const {data}= await axios.post(`/api/mylibrary/${userid}/add`, {items: items})
        return data;
    } catch (err) {
      console.error(err, "axios error");
      return err
    }
    }
//----------------------------------------------------------------