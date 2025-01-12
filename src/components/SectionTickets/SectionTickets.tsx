import React from 'react';

import TicketFilter from '../TicketFilter/TicketFilter';
import TicketsList from '../TicketsList/TicketsList';

import classes from './SectionTickets.module.scss';

export default function TicketList() {
  return (
    <div className={classes.container}>
      <TicketFilter />
      <TicketsList />
      <button className={classes.button}>Показать еще 5 билетов!</button>
    </div>
  );
}
