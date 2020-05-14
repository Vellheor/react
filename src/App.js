import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Loader from './components/common/Loader/Loader';
import {initialazeApp} from './redux/app-reducer';


class App extends React.Component{
  componentDidMount(){
    this.props.initialazeApp();
  }
  
  render(){
    if(!this.props.initialazed){
      return <Loader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer/>}/> 
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/login" render={() => <Login />}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})

export default compose(
  connect(mapStateToProps, {initialazeApp})
)(App);
