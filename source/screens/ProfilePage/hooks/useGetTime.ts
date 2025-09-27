import { getDate, getTime } from './utils';

export const useGetTime = () => {
  const currDate = new Date();

  const time = getTime(currDate.getHours(), currDate.getMinutes());
  const date = getDate(
    currDate.getDate(),
    currDate.getDay(),
    currDate.getMonth(),
  );

  return { time, date };
};
