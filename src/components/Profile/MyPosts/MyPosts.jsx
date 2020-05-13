import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators.js'
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength30 = maxLengthCreator(30);

const NewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} name={"newPostArea"} validate={[requiredField, maxLength30]}/>
         </div>
         <div>
            <button>Отправить</button>
         </div>
      </form>
   )
}

const NewPostReduxForm = reduxForm({
   form: 'newPost'
 })(NewPostForm);

const MyPosts = (props) => {
   let postsElements = props.postData.map( message => <Post message={message.message}/>)

   let onSubmit = (formData) => {
      props.addPost(formData.newPostArea);
   }

   return(
      <div className={s.content}>
         <h2>Мои посты</h2>
         <NewPostReduxForm onSubmit={onSubmit}/>
         {postsElements}
      </div>
   );
}

export default MyPosts;