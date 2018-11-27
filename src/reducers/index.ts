// Library
import { combineReducers } from 'redux-immutable';

// Reducers
import counter, * as fromCounter from './Counter';

export const getCount = (state: any) => fromCounter.getCount(state.get('counter'));

const rootReducers = combineReducers({
  counter,
});

export default rootReducers;
