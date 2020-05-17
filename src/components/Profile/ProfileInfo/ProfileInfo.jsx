import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../common/Loader/Loader';
import noPhoto from '../../../assets/img/user.png';
import ProfileData from './ProfileData';
import ProfileDataChange from './ProfileDataChange';

const ProfileInfo = (props) => {

   let [editMode, setEditMode] = useState(false);
   let activateEditMode = (e) => {
      setEditMode(e)
   };

   if(!props.profile){
      return <Loader />
   }

   let addMainPhoto = (e) => {
      if(e.target.files.length){
         props.savePhoto(e.target.files[0]);
      }
   }
   let onSubmit = (profile) =>{
      props.changeDataProfile(profile).then(
         () => {
            setEditMode(false)
         }
      );
   }
   
   return (
   <div>
      <div className={s.contentInfo}>
        <img src={props.profile.photos.large || noPhoto} className={s.mainPhoto}></img>
        { props.isOwner && <input type="file" onChange={addMainPhoto}/>}
      </div>
      <div><button onClick={ () => activateEditMode(!editMode)}>Изменить профиль</button></div>
      {!editMode 
      ? <ProfileData   status={props.status} 
                     updateProfileStatus={props.updateProfileStatus}
                     profile={props.profile}
      />
      : <ProfileDataChange initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
      }
      
   </div>
   );
}

export default ProfileInfo;