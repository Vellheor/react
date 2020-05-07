import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';




const Dialogs = (props) => {

   if(!props.isAuth) return <Redirect to={"/login"}/>

   let state = props.dialogsPage;

   let dialogsElement = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElement = state.messagesData.map( message => <Message message={message.message} />);

   let newMessageBody = state.newMessageBody;
   
   let onSendMessageClick = () => {
      props.sendMessage();
   }
   let onNewMessageChange = (e) =>{
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }
   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={s.dialogsMessages}>
            <div>{messagesElement}</div>
            <div>
               <div><textarea value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
               <div><button onClick={onSendMessageClick}>Добавить</button></div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;