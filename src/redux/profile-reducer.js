import {userAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
   postData: [
      {id:1, message: "Hy. Its my first project"},
      {id:2, message: "And i am so happy for this"},
      {id:3, message: "World is here"},
      {id:4, message: "Hello all"},
    ],
    newPostText: "Alex",
    profile: null
}

const profileReducer = (state = initialState, action) =>{
   switch(action.type){
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText
         };
         return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: ""
         };
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT,newText: text});


export const userProfile = (userId) =>{
   return(dispatch) => {
      userAPI.userProfile(userId)
      .then(data => {
         dispatch(setUserProfile(data));
      });
   }
}


export default profileReducer;