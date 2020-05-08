import React from 'react';
import {sendMessage,updateNewMessageBody} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';



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

export default compose(
   connect(mapStateToProps, {updateNewMessageBody, sendMessage}),
   withAuthRedirect
)(Dialogs);