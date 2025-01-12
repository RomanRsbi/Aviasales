import React from 'react';

import './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

export default function TicketList() {
  return (
    <React.Fragment>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </React.Fragment>
  );
}
