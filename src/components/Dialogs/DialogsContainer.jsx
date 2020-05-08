import React from 'react';
import {sendMessage,updateNewMessageBody} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';



// const DialogsContainer = (props) => {
//    let state = props.store.getState().messagesPage;
   
//    let onSendMessageClick = () => {
//       props.store.dispatch(sendMessageCreator());
//    }
//    let onNewMessageChange = (body) =>{
//       props.store.dispatch(updateNewMessageBodyCreator(body));
//    }
//    return(
//       <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.messagesPage
   }
};
// let mapDispatchToProps = (dispatch) => {
//    return {
//       updateNewMessageBody: (body) => {
//          dispatch(updateNewMessageBodyCreator(body));
//       },
//       sendMessage: () => {
//          dispatch(sendMessageCreator());
//       }
//    }
// };
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody, sendMessage})(AuthRedirectComponent);


export default DialogsContainer;