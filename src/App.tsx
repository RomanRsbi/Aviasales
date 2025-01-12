import React from 'react';

import logo from './logo/Logo.svg';
import './App.css';
import TransferFilter from './components/TransferFilter/TransferFilter';
import SectionTicket from './components/SectionTickets/SectionTickets';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="img-position" />
      <section className="section-container">
        <TransferFilter />
        <SectionTicket />
      </section>
    </div>
  );
}

export { App };
