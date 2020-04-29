import { createStore, combineReducers } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sitebarReducer from './sitebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navbar: sitebarReducer,
   usersPage: usersReducer
});


let store = createStore(reducers);

export default store;