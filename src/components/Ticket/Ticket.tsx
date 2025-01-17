import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';

import type { NetworkState, State, SecondState } from '../../store/actions';
import { countStopsFn, stopsFn, timeCount, dateFn, newArrFn, sortFn } from '../helper';

import classes from './Ticket.module.scss';

export default function Ticket() {
  let id = 1;
  const [count, setCount] = useState(5);
  const arrTickets = useSelector((state: NetworkState) => state.network.ticketsArr);
  const arrBtnName = useSelector((state: State) => state.arrayFilter.btnName);
  const btnActive = useSelector((state: SecondState) => state.activeButton);
  const loadingInf = useSelector((state: NetworkState) => state.network.loading);
  const errorInf = useSelector((state: NetworkState) => state.network.error);
  const cloneArrTickets = [...arrTickets];

  const addMore = () => {
    setCount(count => count + 5);
  };

  const renderEl = sortFn(btnActive, newArrFn(cloneArrTickets, arrBtnName)).map(item => {
    return (
      <div key={id++} className={classes.container}>
        <div className={classes.div}>
          <span className={classes.price}>{item.price}</span>
          <img src={`https://pics.avs.io/99/36/${item.carrier}.png`} />
        </div>
        <div className={classes.div}>
          <span className={classes.firstSpan}>
            {item.segments[0].origin} - {item.segments[0].destination}
            <br />
            <span className={classes.secondSpan}>{dateFn(item.segments[0].date, item.segments[0].duration)}</span>
          </span>
          <span className={classes.firstSpan}>
            В ПУТИ
            <br />
            <span className={classes.secondSpan}>{timeCount(item.segments[0].duration)}</span>
          </span>
          <span className={classes.firstSpan}>
            {countStopsFn(item.segments[0].stops)}
            <br />
            <span className={classes.secondSpan}>{stopsFn(item.segments[0].stops)}</span>
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.firstSpan}>
            {item.segments[1].origin} - {item.segments[1].destination}
            <br />
            <span className={classes.secondSpan}>{dateFn(item.segments[1].date, item.segments[1].duration)}</span>
          </span>
          <span className={classes.firstSpan}>
            В ПУТИ
            <br />
            <span className={classes.secondSpan}>{timeCount(item.segments[1].duration)}</span>
          </span>
          <span className={classes.firstSpan}>
            {countStopsFn(item.segments[1].stops)}
            <br />
            <span className={classes.secondSpan}>{stopsFn(item.segments[1].stops)}</span>
          </span>
        </div>
      </div>
    );
  });

  const hasIf = !(loadingInf || errorInf);
  const errMessage = errorInf ? (
    <Alert message="Error" description="Произошла ошибка, пожалуйста обновите страницу" type="error" showIcon />
  ) : null;
  const loadingSpin = loadingInf ? <Spin size="large" /> : null;
  const renderList = hasIf ? (
    <React.Fragment>
      {renderEl.slice(0, count)}
      <button className={classes.button} onClick={() => addMore()}>
        Показать еще 5 билетов!
      </button>
    </React.Fragment>
  ) : null;

  return (
    <React.Fragment>
      {loadingSpin}
      {renderList}
      {errMessage}
    </React.Fragment>
  );
}
