import { STOREUSER, LOGOUT } from "./actionTypes";

export const storeUser = (user) => ({
    type: STOREUSER,
    payload: {
        customer: user,
        isLoggedIn: true
    }
});


export const logout = () => ({
    type: LOGOUT
   
});