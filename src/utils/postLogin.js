export const API_BASE = "http://localhost:4000";

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const postLoginData = (url, body = {}) => {
  // return fetch(`${url}?access_token=${accessToken}`)
  return fetch(`${API_BASE}${url}`,{
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body:JSON.stringify(body),
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch postUserData failed ${err}`);
    });
};
