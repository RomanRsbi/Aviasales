import { ActionType } from '../action-types';

export const clickOne = (name: string) => {
  return {
    type: ActionType.CLICKONE,
    payload: name
  };
};

export const clickAll = (name: string) => {
  return {
    type: ActionType.CLICKALL,
    payload: name
  };
};

export const deleteOne = (name: string) => {
  return {
    type: ActionType.DELETEONE,
    payload: name
  };
};

export const btnFilter = (name: string) => {
  return {
    type: ActionType.BTNTYPE,
    payload: name
  };
};
