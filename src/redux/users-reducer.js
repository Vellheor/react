const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
   users: [
      // {id:1, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: false, fullName: "Dmitry", status: "I am a manager", location: {city: 'Minsk', country: 'Belarus'}},
      // {id:2, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: true, fullName: "Alex", status: "I am a boss", location: {city: 'Toronto', country: 'Kanada'}},
      // {id:3, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: true, fullName: "Vera", status: "I am a wife", location: {city: 'Kiev', country: 'Ukraine'}},
      // {id:4, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: false, fullName: "Kusha", status: "I am a paradaise", location: {city: 'Borodyanka', country: 'Ukraine'}}
    ]
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
         return {...state, users: [...state.users, ...action.users]} 
      default:
         return state;
   }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId});
export const setUsersAC = (users) =>({type: SET_USERS, users});


export default usersReducer;