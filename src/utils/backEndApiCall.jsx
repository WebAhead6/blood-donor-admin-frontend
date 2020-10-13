const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
};

const backEndApiCall = (method, route, body = {}) => {
  return fetch(`${process.env.REACT_APP_API}${route}`, {
    method: method,
    mode: "cors",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: method === "GET" ? null : JSON.stringify(body),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
      throw new Error(`fetch postAdminData falid ${err}`);
    });
};
export default backEndApiCall;
