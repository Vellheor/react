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
         state.newMessageBody = action.body;
         return state;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = "";
         state.messagesData.push({id:5, message: body});
         return state;
      default:
         return state;
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;