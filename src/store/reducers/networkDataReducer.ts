import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  sessionId: '',
  error: false,
  loading: false,
  ticketsArr: []
};

const networkDataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.NETWORKID:
      return {
        ...state,
        sessionId: action.payload
      };
    case ActionType.LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: true
      };
    case ActionType.GETTICKETS:
      return {
        ...state,
        ticketsArr: action.payload
      };
    default:
      return state;
  }
};

export default networkDataReducer;
