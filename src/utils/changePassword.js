import backEndApiCall from "./backEndApiCall";

export const changePassword = async (password, confirmPassword) => {
    try{
        const response = await  backEndApiCall("POST",`/changePassword`,{password,confirmPassword})
        return response.message
    }
    catch (e) {
        return e.message
    }
   
};