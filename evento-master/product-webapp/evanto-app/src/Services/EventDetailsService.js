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
  'Access-Control-Allow-Origin':"*"
}






export function cancelTicket(bookingID, callback, errorcallback) {
  axios
    .put(`${baseURL}/evento/booking/book/cancellation/${bookingID}`, {
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


export function getEventByEventtype(type, callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/events/eventType/${type}`, {
      headers:headers
    })
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

export function getEventByEventId(id, callback, errorcallback) {

  axios
    .get(`${baseURL}/evento/events/eventId/${id}`)
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

//changes
export function getAllEvents( callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/events/getevents`)
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

export function addRating(eventid,data,callback, errorcallback){

  axios
  .put(`${baseURL}/evento/events/event/rating/${eventid}`,data)
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