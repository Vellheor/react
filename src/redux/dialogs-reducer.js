const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
      dialogsData: [
         {id:1, name:"Кося"},
         {id:2, name:"Рыжая"},
         {id:3, name:"Рысь"},
         {id:4, name:"Куша"},
         {id:5, name:"Олежка"},
         {id:6, name:"Гарри"}
      ],
      messagesData: [
         {id:1, message: "Hello"},
         {id:2, message: "Hi, hero"},
         {id:3, message: "World is here"},
         {id:4, message: "Hello"}
      ],
      newMessageBody: ""
}


const dialogsReducer = (state = initialState,action) =>{
   switch(action.type){
      case SEND_MESSAGE:
         return {
            ...state,
            messagesData: [...state.messagesData, {id:5, message: action.value}]
         };
      default:
         return state;
   }
}

export const sendMessage = (value) => ({type: SEND_MESSAGE, value});

export default dialogsReducer;