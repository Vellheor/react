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
          ]
      },
      navbar: {
         fastMessage: [
            {id:1, path: "https://img.icons8.com/material/4ac144/256/user-male.png", name: "Куша"},
            {id:2, path: "https://img.icons8.com/material/4ac144/256/user-male.png", name: "Рысь"},
            {id:3, path: "https://img.icons8.com/material/4ac144/256/user-male.png", name: "Валя"}
         ]
      }
   },
   getState(){
      return this._state;
   },
   rerenderEntireTree(){
      console.log("123");
   },
   addPost(){
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText
      };   
      this._state.profilePage.postData.push(newPost);
      this.updateNewPostText("");
      this._rerenderEntireTree();
   },
   updateNewPostText(newText){
      this._state.profilePage.newPostText = newText;
      this._rerenderEntireTree();
   },
   subscribe(observer){
      this._rerenderEntireTree = observer;
   }
}


export default store;