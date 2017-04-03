import * as types from '../actions/actionTypes';
//reducer takes current state and action, and returns
//a new state.
//initial state is an array
export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS: 
            //-- wrong because state is immutable
            // state.push(action.course);
            // return state;
            return action.courses;
        default:
            return state;
    }
}