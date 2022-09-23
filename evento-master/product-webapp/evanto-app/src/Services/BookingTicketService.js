import axios from "axios";

// let baseURL = "http://localhost:8080";
console.log("PAGEURL :> ",window.location.href)
const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];
const builtip = 'http://' + ip + ":8080"
console.log("BUILT URL :", builtip)                const baseURL = builtip 


export function getBookingHistorybyEmailid(emailid,callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/booking/book/show-details/emailId/${emailid}`)
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


  export function getOrganizerHistorybyEmailid(emailid,callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/booking/shows/emailId/${emailid}`)
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

export function getBookingdetailsbyBookingid(bookingid,callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/booking/book/show-details/bookingId/${bookingid}`)
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

  
export function registerEventAPI(payload, callback, errorcallback) {
  axios
    .post(`${baseURL}/evento/booking/shows/register-show`, payload)
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


///////////////////////////////


const headers = {
  'Content-Type': 'application/json',
}


export function getShowByLocationEventid(eventid, location, callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/booking/shows/location/${location}/eventId/${eventid}`)
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

export function getShowByid(showid, callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/booking/shows/showId/${showid}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
      return res;
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function bookShow(data, callback, errorcallback) {
  axios
    .post(`${baseURL}/evento/booking/book/show`, data, {
      headers: headers
    })
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
      return res;
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}


