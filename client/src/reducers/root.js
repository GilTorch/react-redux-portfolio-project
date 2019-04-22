import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './users';
import lessonReducer from './lessons';

let root=combineReducers({ 
    auth:authReducer,
    users: userReducer,
    lessons: lessonReducer
 })

 export default root;