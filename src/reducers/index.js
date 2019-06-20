import {combineReducers} from "redux";
import authenticationReducer from './authenticationReducer';
import streamReducer from './streamReducer';
import {reducer} from "redux-form";

export default combineReducers({
   auth: authenticationReducer,
   form: reducer,
   streams: streamReducer
});