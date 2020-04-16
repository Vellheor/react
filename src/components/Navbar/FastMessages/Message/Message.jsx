import React from 'react';

const Message = (props) => {
   
   return (
      <div><img src={props.path} alt=""/>{props.name}</div>
   )
}
export default Message;