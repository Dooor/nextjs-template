// Library
import { Map } from 'immutable';

// Reducer
import reducer, { initialState } from './index';

// Constants
import * as types from '../../constants/ActionTypes';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INCREASE_COUNT', () => {
    const expected = Map({
      count: 1,
    });

    expect(
      reducer(initialState, {
        type: types.INCREASE_COUNT,
      }),
    ).toEqual(expected);
  });
});
