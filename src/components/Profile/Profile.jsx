import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
   return (
      <div className={s.content}>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} savePhoto={props.savePhoto} changeDataProfile={props.changeDataProfile}/>
        <MyPostsContainer />
      </div>
   );
}

export default Profile;