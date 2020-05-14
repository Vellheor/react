import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfile, getProfileStatus, updateProfileStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
   
   componentDidMount(){
      
      let userId=this.props.match.params.userId;
      if(!userId) userId = this.props.autorizedUserId;
      if(!userId) this.props.history.push("/login");
      this.props.userProfile(userId);
      this.props.getProfileStatus(userId);
   }
   
   render(){
      return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
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
   connect(mapStateToProps, {userProfile, getProfileStatus, updateProfileStatus}),
   withRouter,
   //withAuthRedirect
)(ProfileContainer);