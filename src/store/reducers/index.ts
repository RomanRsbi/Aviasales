import { combineReducers } from 'redux';

import asideFilterReducer from './asideFilterReducer.ts';
import ticketFilter from './ticketFilter.ts';
import networkDataReducer from './networkDataReducer.ts';

const reducers = combineReducers({
  arrayFilter: asideFilterReducer,
  activeButton: ticketFilter,
  network: networkDataReducer
});

export default reducers;
