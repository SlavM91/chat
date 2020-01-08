import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import chartReducer  from './reducer';

export const store = createStore(chartReducer, applyMiddleware(thunk));

