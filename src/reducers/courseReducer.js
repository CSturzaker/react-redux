import * as types from '../actions/actionTypes';
//reducer takes current state and action, and returns
//a new state.
//initial state is an array
export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE: 
            //-- wrong because state is immutable
            // state.push(action.course);
            // return state;

            //use ES6 spread operator on existing
            //array.  Effectively explodes array
            //into individual objects.  We then
            //create a new object and return new 
            //array
            return [...state,
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}