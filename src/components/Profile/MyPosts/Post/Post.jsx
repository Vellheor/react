import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return(
      <div className={s.item}>
         <div><img src="data:image/png;base64,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" /></div>
         <div>{props.message}</div>
      </div>
   );
}

export default Post;