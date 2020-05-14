import {userAPI} from '../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";

let initialState = {
   users: [],
   pageSize: 5,
   tatolUsersCount: 20,
   currentPage: 1,
   isFetching: false,
   followingProgress: []
}

const usersReducer = (state = initialState, action) =>{
   switch(action.type){
      case FOLLOW:
         return {
            ...state, 
            users: state.users.map( u => {
               if(u.id === action.userId){
                  return {...u, followed: true}
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state, 
            users: state.users.map( u => {
               if(u.id === action.userId){
                  return {...u, followed: false}
               }
               return u;
            })
         }
      case SET_USERS:
         return {...state, users: action.users} 
      case SET_CURRENT_PAGE:
         return {...state, currentPage : action.currentPage} 
      case SET_TOTAL_USERS_COUNT:
         return {...state, tatolUsersCount : action.tatolUsersCount} 
      case SET_IS_FETCHING:
         return {...state, isFetching : action.isFetching} 
      case FOLLOWING_PROGRESS:
         return {
            ...state, 
            followingProgress : action.isFetching ? [...state.followingProgress, action.userId] : state.followingProgress.filter( id => id != action.userId)
         } 
      default:
         return state;
   }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) =>({type: UNFOLLOW, userId});
export const setUsers = (users) =>({type: SET_USERS, users});
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage});
export const setTatolUsersCount = (tatolUsersCount) =>({type: SET_TOTAL_USERS_COUNT, tatolUsersCount});
export const setIsFetching = (isFetching) =>({type: SET_IS_FETCHING, isFetching});
export const followingInProgress = (isFetching, userId) =>({type: FOLLOWING_PROGRESS, isFetching, userId});


export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setIsFetching(true));
      dispatch(setCurrentPage(currentPage));
      userAPI.getUsers(currentPage, pageSize)
      .then(data => {
         dispatch(setIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTatolUsersCount(data.totalCount));
      });
   }
}

export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(followingInProgress(true, userId));
      userAPI.unfollowUsers(userId)
      .then(data => {
         if(data.resultCode === 0){
            dispatch(unfollowSuccess(userId));
         }
         dispatch(followingInProgress(false, userId));
      });
   }
}

export const follow = (userId) => {
   return (dispatch) => {
      dispatch(followingInProgress(true, userId));
      userAPI.followUsers(userId)
      .then(data => {
         if(data.resultCode === 0){
            dispatch(followSuccess(userId));
         }
         dispatch(followingInProgress(false, userId));
      });
   }
}




export default usersReducer;