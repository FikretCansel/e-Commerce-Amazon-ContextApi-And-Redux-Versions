import * as actionTypes from "../actions/actionTypes";
//import * as userActions from "../actions/userActions";
import initialState from "./initialState";

export default function userReducer(state=initialState.user,action){
    switch(action.type){
        case actionTypes.SET_USER:
            return action.payload;
        default:
            return state;
    }
}

