import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';


const maxLength30 = maxLengthCreator(30);

const dialogsNewMessage = (props) => {
   return(
      <div>
         <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name="newMessage" validate={[requiredField, maxLength30 ]}/></div>
            <div><button>Добавить</button></div>
         </form>
      </div>
   )
   
}
const DialogsReduxNewMessage = reduxForm({
   form: 'dialogsNewMessage'
 })(dialogsNewMessage);

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElement = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElement = state.messagesData.map( message => <Message message={message.message} />);
   
   let addNewMessage = (formData) => {
      props.sendMessage(formData.newMessage);
   }
   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={s.dialogsMessages}>
            <div>{messagesElement}</div>
            <DialogsReduxNewMessage onSubmit={addNewMessage}/>
         </div>
      </div>
   )
}

export default Dialogs;