import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, State } from '../../store';

import classes from './TransferFilter.module.scss';

export default function TransferFilter() {
  const dispatch = useDispatch();

  const { clickOne, clickAll, deleteOne } = bindActionCreators(actionCreators, dispatch);
  const transferFilterArr = useSelector((state: State) => state.arrayFilter.filterArr);
  // const btnActive = useSelector((state: State) => state.arrayFilter.btnActive);

  useEffect(() => {
    changeFilter();
  }, [transferFilterArr]);

  const changeFilter = () => {
    const newTransferArr = [...transferFilterArr.slice(1, 5)];
    if (newTransferArr.every(el => el.checked)) {
      clickAll('Все');
    } else {
      deleteOne('Все');
    }
  };

  const renderEl = transferFilterArr.map((el, index) => (
    <li key={index} className={classes.li}>
      <input
        type="checkbox"
        id={String(index)}
        className={classes.checkbox}
        onChange={() => clickOne(el.name)}
        checked={el.checked}
      />
      <label htmlFor={String(index)} className={classes.label}>
        {el.name}
      </label>
    </li>
  ));

  return (
    <aside className={classes.aside}>
      <span className={classes.title}>Количество пересадок</span>
      <ul className={classes.ul}>{renderEl}</ul>
    </aside>
  );
}
