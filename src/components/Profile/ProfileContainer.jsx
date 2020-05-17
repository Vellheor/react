import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfile, getProfileStatus, updateProfileStatus, savePhoto, changeDataProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
   
   refreshProfile(){
      let userId=this.props.match.params.userId;
      if(!userId) userId = this.props.autorizedUserId;
      if(!userId) this.props.history.push("/login");
      this.props.userProfile(userId);
      this.props.getProfileStatus(userId);
   }

   componentDidMount(){
      this.refreshProfile();
   }
   
   componentDidUpdate(prevProps){
      if(this.props.match.params.userId != prevProps.match.params.userId){
         this.refreshProfile();
      }
   }
   
   render(){
      return <Profile {...this.props} 
                     profile={this.props.profile} 
                     status={this.props.status} 
                     updateProfileStatus={this.props.updateProfileStatus} 
                     savePhoto={this.props.savePhoto}
                     isOwner = {!this.props.match.params.userId}
                     changeDataProfile={this.props.changeDataProfile}
            />
   }
}

let mapStateToProps = (state) => (
   {
      
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      autorizedUserId: state.auth.userId
   }
)

export default compose(
   connect(mapStateToProps, {userProfile, getProfileStatus, updateProfileStatus, savePhoto, changeDataProfile}),
   withRouter,
   //withAuthRedirect
)(ProfileContainer);