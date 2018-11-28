// Actions
import * as actions from './index';

// Constants
import * as types from '../../constants/ActionTypes';

describe('Counter actions', () => {
  it('should create an action to increase count', () => {
    const expectedAction = {
      type: types.INCREASE_COUNT,
    };

    expect(actions.increaseCount()).toEqual(expectedAction);
  });
});
