export const ajax = {
  get: function get(endPoint, addJWT = false) {
    return fetch(`https://localhost:7035/api/${endPoint}`, {
      method: "GET",
      headers: {
        mode: "cors",
        authorization: addJWT
        ? `Bearer ${document.cookie.split("j=")[1].split(";")[0]}`
        : "",
      },
    });
  },
  post: function post(endPoint, body, addJWT = false) {
    return fetch(`https://localhost:7035/api/${endPoint}`, {
      method: "POST",
      headers: {
        mode: "cors",
        authorization: addJWT
          ? `Bearer ${document.cookie.split("j=")[1].split(";")[0]}`
          : "",
      },
      body: body,
    });
  },
};
