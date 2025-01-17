import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  filterArr: [
    { name: 'Все', checked: true },
    { name: 'Без пересадок', checked: true },
    { name: '1 пересадка', checked: true },
    { name: '2 пересадки', checked: true },
    { name: '3 пересадки', checked: true }
  ],
  btnActive: true,
  btnName: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
};

const asideFilterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLICKONE:
      if (action.payload === 'Все') {
        if (state.btnActive === false) {
          return {
            filterArr: state.filterArr.map(el => ({ ...el, checked: true })),
            btnActive: true,
            btnName: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
          };
        } else
          return {
            filterArr: state.filterArr.map(el => ({ ...el, checked: false })),
            btnActive: false,
            btnName: []
          };
      } else {
        const index = state.btnName.indexOf(action.payload);
        const item = state.filterArr.find(el => el.name === action.payload);
        if (item?.checked === true) {
          return {
            ...state,
            filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
            btnName: state.btnName.toSpliced(index, 1)
          };
        } else {
          return {
            ...state,
            filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
            btnName: [...state.btnName, action.payload]
          };
        }
      }
    case ActionType.CLICKALL:
      if (state.btnActive === true) {
        return state;
      } else {
        return {
          filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
          btnActive: true,
          btnName: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
        };
      }
    case ActionType.DELETEONE:
      if (state.btnActive === false) {
        return state;
      } else {
        const index = state.btnName.indexOf(action.payload);
        return {
          filterArr: state.filterArr.map(el => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
          btnActive: false,
          btnName: state.btnName.toSpliced(index, 1)
        };
      }
    default:
      return state;
  }
};

export default asideFilterReducer;
