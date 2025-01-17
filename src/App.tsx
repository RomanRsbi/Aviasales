import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from './logo/Logo.svg';
import './App.css';
import TransferFilter from './components/TransferFilter/TransferFilter';
import SectionTicket from './components/SectionTickets/SectionTickets';
import { getIdFn, getTickets } from './components/helper';
import { actionCreators } from './store';

function App() {
  const dispatch = useDispatch();

  const { getIdAction, loadingAction, errAction, getTicketsArr } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    loadingAction();
    getIdFn()
      .then(res => {
        getIdAction(res);
        getTickets(res)
          .then(response => {
            getTicketsArr(response);
          })
          .catch(() => {
            errAction();
          });
      })
      .catch(() => {
        errAction();
      })
      .finally(() => {
        loadingAction();
      });
  }, []);

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
