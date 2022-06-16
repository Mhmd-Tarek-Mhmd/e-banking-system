import { cookies } from "./cookies";

export const ajax = {
  get: function get(endPoint, addJWT = false) {
    return new Promise(function (resolve, reject) {
      let headers = {
        mode: "cors",
      };

      if (addJWT) headers.authorization = `Bearer ${cookies.get("j")}`;

      fetch(`/api/${endPoint}`, {
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
      if (addJWT) headers.authorization = `Bearer ${cookies.get("j")}`;

      fetch(`/api/${endPoint}`, {
        method: "POST",
        headers: headers,
        body: body,
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => resolve(data));
        } else {
          if (response.status === 400)
            response.json().then((res) => reject(res.errors[""]));
          else if (response.status === 406)
            response.text().then((res) => reject(res));
          else {
            response.json().then((errors) => {
              reject(errors);
            });
          }
        }
      });
    });
  },
};
