import {  applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./index";


export default function configureStore(){
    return createStore(Reducers,applyMiddleware(thunk));
}