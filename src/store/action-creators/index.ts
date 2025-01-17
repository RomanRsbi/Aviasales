import { ActionType } from '../action-types';
import { Ticket } from '../actions';

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

export const getIdAction = (text: string) => {
  return {
    type: ActionType.NETWORKID,
    payload: text
  };
};

export const loadingAction = () => {
  return {
    type: ActionType.LOADING
  };
};

export const errAction = () => {
  return {
    type: ActionType.ERROR
  };
};

export const getTicketsArr = (array: Array<Ticket>) => {
  return {
    type: ActionType.GETTICKETS,
    payload: array
  };
};
