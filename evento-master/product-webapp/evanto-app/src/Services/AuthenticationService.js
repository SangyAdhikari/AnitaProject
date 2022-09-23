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

export function getUserbyEmailid(emailid,callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/authentication/evento/getId/${emailid}`)
      .then((res) => {
        if (callback != null) {
          callback(res.data);
        }
      })
      .catch((err) => {
        if (errorcallback != null) {
          errorcallback(err);
        }
      });
  }

  export function authenticateUser(data,callback, errorcallback) {
    axios
      .post(`${baseURL}/evento/authentication/authenticate`,data ,{
        headers:headers
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
