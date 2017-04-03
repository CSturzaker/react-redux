import * as types from '../actions/actionTypes';
import initialState from './initialState';
//reducer takes current state and action, and returns
//a new state.
//initial state is an array
export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS: 
            //-- wrong because state is immutable
            // state.push(action.course);
            // return state;
            return action.authors;
        default:
            return state;
    }
}