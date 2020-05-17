import {authAPI, securityAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null
}


const authReducer = (state = initialState,action) =>{
   switch(action.type){
      case SET_USER_DATA:
      return{
            ...state,
            ...action.data
         };
      case SET_CAPTCHA:
      return{
            ...state,
            ...action.data
         };
      default:
         return state;
   }
}


export const setUserData = (userId, email, login, isAuth) => 
({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const setCaptcha = (captchaUrl) => 
({ type: SET_CAPTCHA, data: { captchaUrl } });

export const userData = () => {
   return(dispatch) => {
      return authAPI.setUserData()
      .then(data => {
         if(data.resultCode === 0){
            dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
         }
      });
   }
}
export const login = (email, password, rememberMe, captcha) => {
   return(dispatch) => {
      authAPI.login(email, password, rememberMe, captcha)
      .then(data => {
         if(data.resultCode === 0){
            dispatch(userData());
         }
         else{
            if(data.resultCode === 10){
               dispatch(getCaptchaUrl());
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}))
         }
      });
   }
}
export const logout = () => {
   return(dispatch) => {
      authAPI.logout()
      .then(data => {
         if(data.resultCode === 0){
            dispatch(setUserData(null, null, null, false));
         }
      });
   }
}

export const getCaptchaUrl = () => {
   return(dispatch) => {
      securityAPI.getCaptchaUrl()
      .then(response => {
         dispatch(setCaptcha(response.data.url));
      });
   }
}


export default authReducer;