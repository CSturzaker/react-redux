import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableSateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; //async library

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableSateInvariant())
    );
}