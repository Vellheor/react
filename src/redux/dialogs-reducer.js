const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
      case UPDATE_NEW_MESSAGE_BODY: 
      return{
            ...state,
            newMessageBody: action.body
         };
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: "",
            messagesData: [...state.messagesData, {id:5, message: body}]
         };
      default:
         return state;
   }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody= (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;