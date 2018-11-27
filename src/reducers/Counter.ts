// Library
import { Map } from 'immutable';

// Constants
import * as types from '../constants/ActionTypes';

const initialState = Map({
  count: 0,
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE_COUNT:
      return state.set('count', state.get('count') + 1);
    default:
      return state;
  }
};

export const getCount = (state) => {
  return state.get('count');
};

export default app;
