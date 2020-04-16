import React from 'react';
import s from './FastMessages.module.css';
import Message from './Message/Message';

const FastMessages = (props) => {
   let fastMessageElement = props.fastMessage.map( message => <Message path={message.path} name={message.name}/>)


   return (
      <div className={s.fastMessages}>
         {fastMessageElement}
      </div>
   )
}
export default FastMessages;