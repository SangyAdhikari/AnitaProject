import axios from "axios";

// let baseURL = "http://localhost:8080";
console.log("PAGEURL :> ",window.location.href)
const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];
const builtip = 'http://' + ip + ":8080"
console.log("BUILT URL :", builtip)                const baseURL = builtip 

const headers = {
    'Content-Type': 'application/json',
   
  }


export async function createOrder(data,callback, errorcallback) {
    await axios
      .post(`${baseURL}/evento/payment-gateway/create-order`,data,{
        headers: headers
      })
      .then((res) => {
        
        if (callback != null) {
          callback(res);
        }
      })
      .catch((err) => {
        if (errorcallback != null) {
          errorcallback(err);
        }
      });
}

 


export function addPaymentdetails(data,callback, errorcallback) {
    axios
      .put(`${baseURL}/evento/payment-gateway/payment-details`,data,{
        headers: headers
      })
      .then((res) => {
        
        if (callback != null) {
          callback(res);
        }
      })
      .catch((err) => {
        if (errorcallback != null) {
          errorcallback(err);
        }
      });
}

 