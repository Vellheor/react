import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataChange = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div><button>Сохранить</button></div>
         {props.error &&
            <div className={style.formError}>
               <span>{props.error}</span>
            </div>
         }
         <div>
            <b>Имя: </b>
            <Field placeholder={"ФИО"} component={Input} name={"fullName"}/>
         </div>
         <div>
            <b>Ищу работу: </b>
            <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
         </div>
         <div>
            <b>Мои навыки: </b>
            <Field placeholder={"Навыки"} component={Textarea} name={"lookingForAJobDescription"}/>
         </div>
         <div>
            <b>Про меня: </b>
            <Field placeholder={"AboutMe"} component={Textarea} name={"aboutMe"}/>
         </div>
         <div>
            <b>Контакты: </b> {Object.keys(props.profile.contacts).map(key => {
               return <div className={s.contacts}><b>{key}:</b> 
               <Field name={"contacts." + key} component={Input} placeholder={key}/>
               </div>
            })}
         </div>
      </form>
   );
}

const ProfileDataChangeReduxForm = reduxForm({
   form: 'profileDataChange'
 })(ProfileDataChange);

export default ProfileDataChangeReduxForm;