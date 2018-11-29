import * as types from '../constants/ActionTypes';
import KeenTrackingClient from '../lib/KeenTrackingClient';

// Record all actions to a single event stream
const EVENT_STREAM_NAME = 'nestjs-template-actions';

// Omit noisy actions if necessary
const OMITTED_ACTIONS = [
  types.INCREASE_COUNT,
];

const reduxMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const returnValue = next(action);
    const eventBody = {
      action,
      state: getState(),
      /*
          Include additional properties here, or
          refine the state data that is recorded
          by cherry-picking specific properties
      */
    };
    // Filter omitted actions by action.type
    // ...or whatever you name this property
    if (OMITTED_ACTIONS.indexOf(action.type) < 0) {
      KeenTrackingClient.recordEvent(EVENT_STREAM_NAME, eventBody);
    }
    return returnValue;
  };
};

export default reduxMiddleware;
