import { createStore, combineReducers } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sitebarReducer from './sitebar-reducer';

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navbar: sitebarReducer
});


let store = createStore(reducers);

export default store;