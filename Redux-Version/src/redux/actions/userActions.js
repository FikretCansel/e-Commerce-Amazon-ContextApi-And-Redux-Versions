import * as actionTypes from "./actionTypes";

export function setUser(user){
    return {type:actionTypes.SET_USER,payload:user}
}
