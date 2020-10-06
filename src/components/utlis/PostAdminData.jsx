const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
};

const postAdminData = (url, body = {}) => {
  return fetch(`${process.env.REACT_APP_API}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
      throw new Error(`fetch postAdminData falid ${err}`);
    });
};
export default postAdminData;
