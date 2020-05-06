import React from 'react';
import Header from './Header';
import * as Axios from 'axios';
import { setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component{
   componentDidMount(){
      Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
         .then(response => {
         if(response.data.resultCode === 0){
            this.props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login);
         }
      });
   }



   render(){
      return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
   }
}

const mapStateToProps = (state) => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer);