const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
   postData: [
      {id:1, message: "Hy. Its my first project"},
      {id:2, message: "And i am so happy for this"},
      {id:3, message: "World is here"},
      {id:4, message: "Hello all"},
    ],
    newPostText: "Alex"
}

const profileReducer = (state = initialState, action) =>{
   switch(action.type){
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText
         };   
         state.postData.push(newPost);
         state.newPostText = "";
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT,newText: text});


export default profileReducer;