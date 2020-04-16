let rerenderEntireTree = () => {
   console.log("123");
}

let state = {
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
}

export const addPost = () => {
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText
   };   
   state.profilePage.postData.push(newPost);
   updateNewPostText("");
   rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree();
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer;
}

export default state;