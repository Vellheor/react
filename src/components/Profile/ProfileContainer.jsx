import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
   
   componentDidMount(){
      let userId=this.props.match.params.userId;
      (!userId)? userId = 2 : userId=userId;
      this.props.userProfile(userId);
      // userAPI.userProfile(userId)
      // .then(data => {
      //    this.props.setUserProfile(data);
      // });
   }
   
   render(){
      //if(!this.props.isAuth) return <Redirect to={"/login"}/>

      return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let mapStateToProps = (state) => (
   {
      profile: state.profilePage.profile
   }
)

export default compose(
   connect(mapStateToProps, {userProfile}),
   withRouter,
   withAuthRedirect
)(ProfileContainer);