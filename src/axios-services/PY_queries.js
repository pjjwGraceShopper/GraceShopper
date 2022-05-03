import axios from 'axios';




export async function getPY() {
    try{ 
      const response = await axios.get('http://127.0.0.1:5000/hello',)
      console.log(response, "get Py")
    }catch (err) {
      console.error(err, "axios error");
      return err
    }
  }
//----------------------------------------------------------------
export async function submitPayment() {
  try{ 
    const response = await axios.get('http://127.0.0.1:5000/v2/payment',)
    console.log(response)
    return response
  }catch (err) {
    console.error(err, "axios error");
    return err
  }
}