import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
// const middleware = [thunk, createLogger];
import rootReducer from './reducers/reducers.js';
// import currentWeather from './data/fake-current';

// const store = createStore(rootReducer, defaultState);

//setting state in store - can refactor to set state in reducers later
// const defaultState = {
//   currentWeather
// };

console.log(rootReducer)

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
);

export default store;
