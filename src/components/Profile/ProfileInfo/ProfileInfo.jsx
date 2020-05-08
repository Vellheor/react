import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../common/Loader/Loader';
import Status from './Status';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Loader />
   }


   return (
   <div>
      <div className={s.contentInfo}>
        <img src={props.profile.photos.large}></img>
      </div>
      <div>
         <Status status={props.status} updateProfileStatus={props.updateProfileStatus}/>
      </div>
   </div>
   );
}

export default ProfileInfo;