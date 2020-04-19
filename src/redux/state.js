const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
   _state: {
      profilePage: {
         postData: [
            {id:1, message: "Hy. Its my first project"},
            {id:2, message: "And i am so happy for this"},
            {id:3, message: "World is here"},
            {id:4, message: "Hello all"},
          ],
          newPostText: "Alex"
      },
      messagesPage: {
         messagesData: [
            {id:1, message: "Hello"},
            {id:2, message: "Hi, hero"},
            {id:3, message: "World is here"},
            {id:4, message: "Hello"}
          ],
          dialogsData: [
            {id:1, name:"Кося"},
            {id:2, name:"Рыжая"},
            {id:3, name:"Рысь"},
            {id:4, name:"Куша"},
            {id:5, name:"Олежка"},
            {id:6, name:"Гарри"}
          ],
          newMessageBody: ""

      },
      navbar: {
         fastMessage: [
            {id:1, path: "https://img.icons8.com/material/4ac144/256/user-male.png", name: "Куша"},
            {id:2, path: "https://img.icons8.com/material/4ac144/256/user-male.png", name: "Рысь"},
            {id:3, path: "https://img.icons8.com/material/4ac144/256/user-male.png", name: "Валя"}
         ]
      }
   },
   _rerenderEntireTree(){
      console.log("123");
   },

   getState(){
      return this._state;
   },
   subscribe(observer){
      this._rerenderEntireTree = observer;
   },
   
   dispatch(action){
      if(action.type === ADD_POST){
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
         };   
         this._state.profilePage.postData.push(newPost);
         this._state.profilePage.newPostText = "";
         this._rerenderEntireTree();
      }else if(action.type === UPDATE_NEW_POST_TEXT){
         this._state.profilePage.newPostText = action.newText;
         this._rerenderEntireTree();
      }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
         this._state.messagesPage.newMessageBody = action.body;
         this._rerenderEntireTree(this._state);
      }else if(action.type === SEND_MESSAGE){
         let body = this._state.messagesPage.newMessageBody;
         this._state.messagesPage.newMessageBody = "";
         this._state.messagesPage.messagesData.push({id:5, message: body});
         this._rerenderEntireTree();
      }
   }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT,newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;