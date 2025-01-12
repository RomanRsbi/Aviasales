import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const activeButton = '';

const ticketFilter = (state = activeButton, action: Action) => {
  switch (action.type) {
    case ActionType.BTNTYPE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default ticketFilter;
