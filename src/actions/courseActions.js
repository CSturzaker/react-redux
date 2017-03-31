import * as types from './actionTypes';
//action creator
export function createCourse(course) {
    //type property defines the actions type
    //returns an action
    return { type: types.CREATE_COURSE, course};
}