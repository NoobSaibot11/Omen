export const getTime = (hour: number, minute: number) => {
  const { hrs: currentHrs, ampm } = getHours(hour);
  const currentMinutes = getMinutes(minute);

  return `${currentHrs}:${currentMinutes} ${ampm}`;
};

export const getDate = (date: number, day: number, month: number) => {
  const currentDate = date;
  const currentDay = getDay(day);
  const currentMonth = getMonth(month);

  return `${currentDay}, ${currentMonth} ${currentDate}`;
};

const getHours = (hour: number): { hrs: number; ampm: 'AM' | 'PM' } => {
  if (hour > 12) return { hrs: hour - 12, ampm: 'PM' };

  return { hrs: hour, ampm: 'AM' };
};

const getMinutes = (minute: number) => {
  if (minute > 9) return minute;

  return `0${minute}`;
};

const getDay = (day: number) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (day > 6) return days[0];

  return days[day];
};

export const getMonth = (month: number) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (month > 11) return months[0];

  return months[month];
};
