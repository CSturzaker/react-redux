import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
//action creator
export function loadCoursesSuccess(courses) {
    //type property defines the actions type
    //returns an action
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

//thunks
export function loadCourses() {
    //thunks always return a function that returns a dispatch
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}