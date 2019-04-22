import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './users';
import lessonReducer from './lessons';
import alertReducer from './alert';

let root=combineReducers({ 
    flash:alertReducer,
    auth:authReducer,
    users: userReducer,
    lessons: lessonReducer
 })

 export default root;