export const ajax = {
  get: function get(endPoint, body) {
    fetch(`https://ebankingsystem.herokuapp.com/api/${endPoint}`, {
      method: "GET",
      headers: {
        mode: "cors",
      },
      body: body,
    });
  },
  post: function post(endPoint, body, addJWT) {
    return fetch(`https://ebankingsystem.herokuapp.com/api/${endPoint}`, {
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
