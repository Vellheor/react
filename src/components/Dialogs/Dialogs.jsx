import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

   let dialogsElement = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElement = props.state.messagesData.map( message => <Message message={message.message} />);

   let personalMessages = React.createRef();
   let personalMessage = () => {
      let text = personalMessages.current.value;
      alert(text);
   }

   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElement}
         </div>
         <div className={s.dialogsMessages}>
            {messagesElement}
            <div>
               <div><textarea cols="30" rows="5" ref={personalMessages}></textarea></div>
               <div><button onClick={personalMessage}>Добавить</button></div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;