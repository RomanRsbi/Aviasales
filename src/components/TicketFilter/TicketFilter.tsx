import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, SecondState } from '../../store';

import classes from './TicketFilter.module.scss';

export default function TicketFilter() {
  const dispatch = useDispatch();

  const { btnFilter } = bindActionCreators(actionCreators, dispatch);
  const btnActiveType = useSelector((state: SecondState) => state.activeButton);

  return (
    <ul className={classes.ul}>
      <li className={classes.li}>
        <button
          className={[classes.button, btnActiveType === 'Самый дешевый' ? classes.btn : null].join(' ')}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => btnFilter(e.currentTarget.textContent || '')}
        >
          Самый дешевый
        </button>
      </li>
      <li className={classes.li}>
        <button
          className={[classes.button, btnActiveType === 'Самый быстрый' ? classes.btn : null].join(' ')}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => btnFilter(e.currentTarget.textContent || '')}
        >
          Самый быстрый
        </button>
      </li>
      <li className={classes.li}>
        <button
          className={[classes.button, btnActiveType === 'Оптимальный' ? classes.btn : null].join(' ')}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => btnFilter(e.currentTarget.textContent || '')}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  );
}
