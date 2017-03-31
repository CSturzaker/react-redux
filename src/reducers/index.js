import {combineReducers} from 'redux';
import courses from './courseReducer';  //as it exports default, it can be aliased however we want.  here we call it courses

//define all reducers for the application
const rootReducer = combineReducers({
    courses //how it is named here is how it is called throughout the application.  this is ES6 shorthand property names.  could be courses: courses
});

export default rootReducer;