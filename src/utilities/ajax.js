export const ajax = {
  get: function get(endPoint, addJWT = false) {
    return new Promise(function (resolve, reject) {
      let headers = {
        mode: "cors",
      };

      if (addJWT)
        headers.authorization = `Bearer ${
          document.cookie.split("j=")[1].split(";")[0]
        }`;

      fetch(`https://ebankingsystem.herokuapp.com/api/${endPoint}`, {
        method: "GET",
        headers: headers,
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => resolve(data));
        } else {
          if (response.status === 400)
            response.json().then((res) => reject(res.errors[""]));
          else {
            response.json().then((errors) => reject(errors));
          }
        }
      });
    });
  },
  post: function post(endPoint, contentType, body, addJWT = false) {
    return new Promise(function (resolve, reject) {
      let headers = {
        mode: "cors",
      };

      if (contentType === "json") headers["Content-Type"] = "application/json";
      if (addJWT)
        headers.authorization = `Bearer ${
          document.cookie.split("j=")[1].split(";")[0]
        }`;

      fetch(`https://ebankingsystem.herokuapp.com/api/${endPoint}`, {
        method: "POST",
        headers: headers,
        body: body,
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => resolve(data));
        } else {
          if (response.status === 400)
            response.json().then((res) => reject(res.errors[""]));
          else {
            response.json().then((errors) => reject(errors));
          }
        }
      });
    });
  },
};
