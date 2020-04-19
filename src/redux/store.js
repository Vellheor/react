import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";

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
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.navbar = sitebarReducer(this._state.navbar, action);
      this._rerenderEntireTree();
   }
};




export default store;