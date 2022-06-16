export const request = {
  get: function get(endPoint, e) {
    e.preventDefault();

    fetch(`https://ebankingsystem.herokuapp.com/api/${endPoint}`, {
      method: "GET",
      headers: {
        mode: "cors",
      },
      body: new FormData(e.currentTarget),
    });
  },
  post: function post(endPoint, e) {
    e.preventDefault();
    fetch(`https://ebankingsystem.herokuapp.com/api/${endPoint}`, {
      method: "POST",
      headers: {
        mode: "cors",
      },
      body: new FormData(e.currentTarget),
    });
  },
};
