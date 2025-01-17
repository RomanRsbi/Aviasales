import { add } from 'date-fns';

import { TicketType } from '../store/actions';

export async function getIdFn() {
  const url = 'https://aviasales-test-api.kata.academy/search';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${response.status}`);
    }
    const date = await response.json();
    return date.searchId;
  } catch (err) {
    alert(err);
  }
}

export async function getTickets(searchId: string) {
  const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${response.status}`);
    }
    const res = await response.json();
    return res.tickets;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const stopsFn = (arr: string[]) => {
  let stopName = null;
  if (arr.length === 0) {
    stopName = null;
    return stopName;
  } else {
    stopName = arr.join();
    return stopName;
  }
};

export const countStopsFn = (arr: string[]) => {
  let text = '';
  if (arr.length === 0) {
    text = 'БЕЗ ПЕРЕСАДОК';
    return text;
  }
  if (arr.length === 1) {
    text = '1 ПЕРЕСАДКА';
    return text;
  } else {
    text = `${arr.length} ПЕРЕСАДКИ`;
    return text;
  }
};

const nullFirst = (time: number) => {
  if (time.toString().length === 1) return '0' + time;
  return time.toString();
};

export const timeCount = (min: number) => {
  return nullFirst(Math.trunc(min / 60)) + 'ч ' + nullFirst(min % 60) + 'м';
};

export const dateFn = (date: string, min: number) => {
  const firstDate = new Date(date);
  const secondDate = add(firstDate, { minutes: min });
  const one = dateFormatFn(firstDate);
  const two = dateFormatFn(secondDate);
  return `${one} - ${two}`;
};

const dateFormatFn = (date: Date) => {
  const hours = date.getHours();
  const min = date.getMinutes();

  const hoursStr = String(hours).padStart(2, '0');
  const minStr = String(min).padStart(2, '0');
  return `${hoursStr}:${minStr}`;
};

const switchCaseFn = (num: number) => {
  switch (num) {
    case 0:
      return 'Без пересадок';
    case 1:
      return '1 пересадка';
    case 2:
      return '2 пересадки';
    case 3:
      return '3 пересадки';
    default:
      return `${num} пересадки`;
  }
};

export const newArrFn = (arrT: TicketType[], arrN: string[]) => {
  if (arrN.length === 0) return [];
  if (arrN.length === 5) return arrT;
  return arrT.filter(el => {
    const first = el.segments[0].stops.length;
    const second = el.segments[1].stops.length;
    return arrN.includes(switchCaseFn(first)) && arrN.includes(switchCaseFn(second));
  });
};

export const sortFn = (nameBtn: string, arrT: TicketType[]) => {
  switch (nameBtn) {
    case 'Оптимальный':
      return arrT.sort((a, b) => {
        if (
          a.price > b.price &&
          a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration
        ) {
          return 1;
        } else return -1;
      });
    case 'Самый быстрый':
      return arrT.sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
      });
    case 'Самый дешевый':
      return arrT.sort((a, b) => {
        return a.price - b.price;
      });
    default:
      return arrT;
  }
};
