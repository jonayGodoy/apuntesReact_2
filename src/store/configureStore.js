import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxInmutableStateInvariant from 'redux-inmutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxInmutableStateInvariant)
  );
}
