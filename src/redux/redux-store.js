import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sitebarReducer from './sitebar-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navbar: sitebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;