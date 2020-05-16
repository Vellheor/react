import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../common/Loader/Loader';
import Status from './Status';
import noPhoto from '../../../assets/img/user.png';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Loader />
   }

   let addMainPhoto = (e) => {
      if(e.target.files.length){
         props.savePhoto(e.target.files[0]);
      }
   }

   return (
   <div>
      <div className={s.contentInfo}>
        <img src={props.profile.photos.large || noPhoto} className={s.mainPhoto}></img>
        <input type="file" onChange={addMainPhoto}/>
      </div>
      <div>
         <Status status={props.status} updateProfileStatus={props.updateProfileStatus}/>
      </div>
   </div>
   );
}

export default ProfileInfo;