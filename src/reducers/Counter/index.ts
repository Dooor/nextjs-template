// Library
import { Map } from 'immutable';

// Constants
import * as types from '../../constants/ActionTypes';

export const initialState = Map({
  count: 0,
});

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INCREASE_COUNT:
      const currentCount = state.get('count') || 0; // FIXME

      return state.set('count', currentCount + 1);
    default:
      return state;
  }
};

export const getCount = (state: any) => {
  return state.get('count');
};

export default counter;
