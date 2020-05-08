import {userAPI, profileAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

let initialState = {
   postData: [
      {id:1, message: "Hy. Its my first project"},
      {id:2, message: "And i am so happy for this"},
      {id:3, message: "World is here"},
      {id:4, message: "Hello all"},
    ],
    newPostText: "Alex",
    profile: null,
    status: ""
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
      case SET_PROFILE_STATUS:
         return {
            ...state,
            status: action.status
         };
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT,newText: text});
export const setProfileStatus = (status) => 
({type: SET_PROFILE_STATUS,status});


export const userProfile = (userId) =>{
   return(dispatch) => {
      userAPI.userProfile(userId)
      .then(data => {
         dispatch(setUserProfile(data));
      });
   }
}

export const getProfileStatus = (userId) =>{
   return(dispatch) => {
      profileAPI.getProfileStatus(userId)
      .then(data => {
         dispatch(setProfileStatus(data));
      });
   }
}

export const updateProfileStatus = (status) =>{
   return(dispatch) => {
      profileAPI.updateProfileStatus(status)
      .then(data => {
         dispatch(setProfileStatus(status));
      });
   }
}


export default profileReducer;