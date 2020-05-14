import { userData } from './auth-reducer';

const SET_INITIALAZED = "SET_INITIALAZED";

let initialState = {
   initialazed: false
}


const appReducer = (state = initialState,action) =>{
   switch(action.type){
      case SET_INITIALAZED:
      return{
            ...state,
            initialazed: true
         };
      default:
         return state;
   }
}


export const setInitialazed = () => ({ type: SET_INITIALAZED });

export const initialazeApp = () => (dispatch) => {

   let promise = dispatch(userData());

   Promise.all([promise]).then( () => {
      dispatch(setInitialazed());
   } )
}

export default appReducer;