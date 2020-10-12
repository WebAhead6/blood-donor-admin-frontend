import backEndApiCall from "./backEndApiCall";

export const login = async (email, password) => {
    try{
         const response = await  backEndApiCall("POST",`/login`,{email, password})
         if (response.code === 200)
         return response.message
    throw new Error (response.message)
    }
    catch (e) {
        throw new Error (e.message)
    }
   
};

export const logOut = async () => {
    try {
         const response = await  backEndApiCall("GET",`/logout`)
    return response.message
    }
   catch (e) {
    return e.message
   }
}

export const isLoggedIn = async () => {
       try {
        const response = await backEndApiCall("GET", "/isLoggedIn")
        return response.data.isLoggedIn;

    }
    catch (e) {
        console.error(e.message);
        return false;
    }
}

export const resetPassword = async (emailAddress) => {
    try{
        const response = await  backEndApiCall("POST",`/resetPassword`,{emailAddress})
        return response.message
    }
    catch (e) {
        return e.message
    }
}