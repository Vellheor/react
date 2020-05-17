import React from 'react';
import Status from './Status';
import s from './ProfileInfo.module.css';

const ProfileData = (props) => {
   return (
   <div>
      <div>
         <Status status={props.status} updateProfileStatus={props.updateProfileStatus}/>
      </div>
      <div>
         <div>
            <b>Имя: </b> {props.profile.fullName}
         </div>
         <div>
            <b>Ищу работу: </b> {props.profile.lookingForAJob ? "Да" : "Нет"}
         </div>
         {props.profile.lookingForAJob && 
         <div>
            <b>Мои навыки: </b> {props.profile.lookingForAJobDescription}
         </div>
         }
         <div>
            <b>Про меня: </b> {props.profile.aboutMe}
         </div>
         <div>
            <b>Контакты: </b> {Object.keys(props.profile.contacts).map(key => {
               return <div className={s.contacts}><b>{key}:</b> {props.profile.contacts[key]}</div>
            })}
         </div>
      </div>
   </div>
   );
}



export default ProfileData;