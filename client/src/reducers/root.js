import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './users';
import lessonsReducer from './lessons';
import lessonReducer from './lesson';
import alertReducer from './alert';

let root=combineReducers({ 
    flash:alertReducer,
    auth:authReducer,
    users: userReducer,
    lessons: lessonsReducer,
    lesson: lessonReducer
 })

 export default root;