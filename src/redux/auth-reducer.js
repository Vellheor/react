import {authAPI} from '../api/api';

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}


const authReducer = (state = initialState,action) =>{
   switch(action.type){
      case SET_USER_DATA:
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

export const userData = () => {
   return(dispatch) => {
      authAPI.setUserData()
      .then(data => {
         if(data.resultCode === 0){
            dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
         }
      });
   }
}
export const login = (email, password, rememberMe) => {
   return(dispatch) => {
      authAPI.login(email, password, rememberMe)
      .then(data => {
         if(data.resultCode === 0){
            dispatch(userData());
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


export default authReducer;