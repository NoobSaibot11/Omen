import { useState } from 'react';
import { getDate, getTime } from './utils';

export const useGetTime = () => {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  setInterval(() => {
    setCurrDate(new Date());
  }, 10 * 1000);

  const time = getTime(currDate.getHours(), currDate.getMinutes());
  const date = getDate(
    currDate.getDate(),
    currDate.getDay(),
    currDate.getMonth(),
  );

  return { time, date };
};
