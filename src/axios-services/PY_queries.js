import axios from 'axios';
//SET BETTER LOGIC LATER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mode = true
let pyURL 
if(mode){
pyURL = 'https://bluebox-payserver.herokuapp.com'
} else { pyURL = 'http://127.0.0.1:5000' }



export async function getPY() {
    try{ 
      const response = await axios.get(`${pyURL}/hello`,)
      console.log(response, "get Py")
    }catch (err) {
      console.error(err, "axios error");
      return err
    }
  }
//----------------------------------------------------------------
export async function submitPayment() {
  try{ 
    const response = await axios.post(`${pyURL}/v2/payments`,)
    console.log(response.data.payment)
    return response.data.payment
  }catch (err) {
    console.error(err, "axios error");
    return err
  }
}