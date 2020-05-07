import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sitebarReducer from './sitebar-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navbar: sitebarReducer,
   usersPage: usersReducer,
   auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;