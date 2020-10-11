import backEndApiCall from "./backEndApiCall";

export const login = async (email, password) => {
  const response = await  backEndApiCall("POST",`/login`,{email, password})
    if (response.code === 200)
    return response.message
    throw new Error (response.message)
};

export const logOut = async () => {
    const response = await  backEndApiCall("GET",`/logout`)
    return response.message
}

export const isLoggedIn = async () => {
    const response = await backEndApiCall("GET", "/isLoggedIn")
    return response.data.isLoggedIn;
}