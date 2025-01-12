import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  filterArr: [
    { name: 'Все', checked: false },
    { name: 'Без пересадок', checked: false },
    { name: '1 пересадка', checked: false },
    { name: '2 пересадки', checked: false },
    { name: '3 пересадки', checked: false }
  ],
  btnActive: false
};

const asideFilterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLICKONE:
      if (action.payload === 'Все') {
        if (state.btnActive === false) {
          return { filterArr: state.filterArr.map(el => ({ ...el, checked: true })), btnActive: true };
        } else return { filterArr: state.filterArr.map(el => ({ ...el, checked: false })), btnActive: false };
      } else
        return {
          ...state,
          filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el))
        };
    case ActionType.CLICKALL:
      if (state.btnActive === true) {
        return state;
      } else {
        return {
          filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
          btnActive: true
        };
      }
    case ActionType.DELETEONE:
      if (state.btnActive === false) {
        return state;
      } else {
        return {
          filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
          btnActive: false
        };
      }
    default:
      return state;
  }
};

export default asideFilterReducer;
