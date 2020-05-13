import React from 'react';
import Header from './Header';
import { userData, logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component{
   componentDidMount(){
         this.props.userData();
   }



   render(){
      return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
   }
}

const mapStateToProps = (state) => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { userData, logout })(HeaderContainer);