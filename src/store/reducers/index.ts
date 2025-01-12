import { combineReducers } from 'redux';

import asideFilterReducer from './asideFilterReducer.ts';
import ticketFilter from './ticketFilter.ts';

const reducers = combineReducers({
  arrayFilter: asideFilterReducer,
  activeButton: ticketFilter
});

export default reducers;

type objCheckbox = {
  name: string;
  checked: boolean;
};

type stateObj = {
  filterArr: objCheckbox[];
  btnActive: boolean;
};

export type State = {
  arrayFilter: stateObj;
};

export type SecondState = {
  activeButton: string;
};
