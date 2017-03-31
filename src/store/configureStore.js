import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableSateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableSateInvariant())
    );
}