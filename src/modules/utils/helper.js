// Conver API date to VNese date

export const converDate = (data) => {
  const date = new Date(data);
  return date.toLocaleDateString();
};

// Conver UTC date string to DAY and MONTH
const days = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDay = (date) => days[date.getDay()];
export const getMonth = (date) => months[date.getMonth()];

// check if date is today
export const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};
// check if date is yesterday
export const isYesterday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() - 1 &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

// Fake api value of movie length and IMDB

export const randomDuration = () =>
  Math.trunc(Math.random() * (200 - 120) + 120);
//
export const randomNumber = () => Math.trunc(Math.random() * (8 - 5) + 5);

// Validation length check function

export const validationLengthCheck = (
  name1,
  value1,
  checkType,
  errorFunction
) => {
  if (name1 === checkType && value1.replace(/ /g, '').length < 4) {
    errorFunction(true);
  }
};
