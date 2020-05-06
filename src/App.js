import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderComponent from './components/Header/HeaderComponent';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderComponent />
        <Navbar />
        {/* <Navbar navbar={props.state.navbar}/> */}
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer/>}/> 
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
