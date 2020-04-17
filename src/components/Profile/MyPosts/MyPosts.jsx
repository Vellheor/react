import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
   let postsElements = props.postData.map( message => <Post message={message.message}/>)

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch({type: "ADD-POST"});
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
   }

   return(
      <div className={s.content}>
         <h2>Мои посты</h2>
         <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
         </div>
         <div>
            <button onClick={ addPost }>Отправить</button>
         </div>
         {postsElements}
      </div>
   );
}

export default MyPosts;