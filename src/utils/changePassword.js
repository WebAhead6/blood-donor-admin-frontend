import backEndApiCall from "./backEndApiCall";

export const changePassword = async (password, confirmPassword) => {
    try{
        const response = await  backEndApiCall("POST",`/changepassword`,{password,confirmPassword})
        return response.message
    }
    catch (e) {
        return e.message
    }
   
};