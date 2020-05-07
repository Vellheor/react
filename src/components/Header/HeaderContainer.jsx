import React from 'react';
import Header from './Header';
import { setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { userAPI } from '../../api/api';

class HeaderContainer extends React.Component{
   componentDidMount(){
         userAPI.setUserData()
         .then(data => {
         if(data.resultCode === 0){
            this.props.setUserData(data.data.id, data.data.email, data.data.login);
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