export const ajax = {
  get: function get(endPoint) {
    return fetch(`https://localhost:7035/api/${endPoint}`, {
      method: "GET",
      headers: {
        mode: "cors",
      },
    });
  },
  post: function post(endPoint, body, addJWT) {
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
