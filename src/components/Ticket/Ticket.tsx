import React from 'react';

import logo from '../../logo/LogoCompany.svg';

import classes from './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={classes.container}>
      <div className={classes.div}>
        <span className={classes.price}>13 400p</span>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.div}>
        <span className={classes.firstSpan}>
          MOW – HKT
          <br />
          <span className={classes.secondSpan}>10:45 – 08:00</span>
        </span>
        <span className={classes.firstSpan}>
          В ПУТИ
          <br />
          <span className={classes.secondSpan}>21ч 15м</span>
        </span>
        <span className={classes.firstSpan}>
          2 ПЕРЕСАДКИ
          <br />
          <span className={classes.secondSpan}>HKG, JNB</span>
        </span>
      </div>
      <div className={classes.div}>
        <span className={classes.firstSpan}>
          MOW – HKT
          <br />
          <span className={classes.secondSpan}>11:20 – 00:50</span>
        </span>
        <span className={classes.firstSpan}>
          В ПУТИ
          <br />
          <span className={classes.secondSpan}>13ч 30м</span>
        </span>
        <span className={classes.firstSpan}>
          1 ПЕРЕСАДКА
          <br />
          <span className={classes.secondSpan}>HKG</span>
        </span>
      </div>
    </div>
  );
}
