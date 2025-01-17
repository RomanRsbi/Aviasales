import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'antd';

import Ticket from '../Ticket/Ticket';
import { State } from '../../store/actions';

//import classes from './TicketsList.module.scss';

export default function TicketList() {
  const transferFilterArr = useSelector((state: State) => state.arrayFilter.filterArr);

  const newTransferArr = [...transferFilterArr.slice(1, 5)];

  const renderElement = newTransferArr.some(el => el.checked) ? (
    <Ticket />
  ) : (
    <Alert description="Рейсов, подходящих под заданные фильтры, не найдено" />
  );

  return renderElement;
}
