function timeWas(time, now) {
  if (typeof time !== 'number' || (typeof now !== 'undefined' && typeof now !== 'number')) {
    throw new TypeError('You must provide valid arguments.');
  }

  const JUST_NOW = 'just now';
  const SECOND_AGO = ' second ago';
  const SECONDS_AGO = ' seconds ago';
  const MINUTE_AGO = ' minute ago';
  const MINUTES_AGO = ' minutes ago';
  const HOUR_AGO = ' hour ago';
  const HOURS_AGO = ' hours ago';
  const DAY_AGO = ' day ago';
  const DAYS_AGO = ' days ago';
  const WEEK_AGO = ' week ago';
  const WEEKS_AGO = ' weeks ago';
  const MONTH_AGO = ' month ago';
  const MONTHS_AGO = ' months ago';
  const YEAR_AGO = ' year ago';
  const YEARS_AGO = ' years ago';
  const MILLI_SECONDS_IN_A_SECOND = 1000;
  const SECONDS_IN_A_MINUTE = 60;
  const MINUTES_IN_A_HOUR = 60;
  const HOURS_IN_A_DAY = 24;
  const DAYS_IN_A_WEEK = 7;
  const DAYS_IN_A_MONTH = 30;
  const MONTHS_IN_A_YEAR = 12;

  const CURRENT_TIME_IN_MILLISECONDS = now !== ' undefined' ? now : Date.now();

  const DIFFERENCE_IN_MILLISECONDS = CURRENT_TIME_IN_MILLISECONDS - time;
  const DIFFERENCE_IN_SECONDS = DIFFERENCE_IN_MILLISECONDS / MILLI_SECONDS_IN_A_SECOND;
  const DIFFERENCE_IN_MINUTES = DIFFERENCE_IN_SECONDS / SECONDS_IN_A_MINUTE;
  const DIFFERENCE_IN_HOURS = DIFFERENCE_IN_MINUTES / MINUTES_IN_A_HOUR;
  const DIFFERENCE_IN_DAYS = DIFFERENCE_IN_HOURS / HOURS_IN_A_DAY;
  const DIFFERENCE_IN_WEEKS = DIFFERENCE_IN_DAYS / DAYS_IN_A_WEEK;
  const DIFFERENCE_IN_MONTHS = DIFFERENCE_IN_DAYS / DAYS_IN_A_MONTH;
  const DIFFERENCE_IN_YEARS = DIFFERENCE_IN_MONTHS / MONTHS_IN_A_YEAR;
  if (DIFFERENCE_IN_YEARS > 0 && DIFFERENCE_IN_MONTHS % MONTHS_IN_A_YEAR === 0) {
    return DIFFERENCE_IN_YEARS + (DIFFERENCE_IN_YEARS === 1 ? YEAR_AGO : YEARS_AGO);
  }
  if (DIFFERENCE_IN_MONTHS > 0 && DIFFERENCE_IN_DAYS % DAYS_IN_A_MONTH === 0) {
    return DIFFERENCE_IN_MONTHS + (DIFFERENCE_IN_MONTHS === 1 ? MONTH_AGO : MONTHS_AGO);
  }
  if (DIFFERENCE_IN_WEEKS > 0 && DIFFERENCE_IN_DAYS % DAYS_IN_A_WEEK === 0) {
    return DIFFERENCE_IN_WEEKS + (DIFFERENCE_IN_WEEKS === 1 ? WEEK_AGO : WEEKS_AGO);
  }
  if (DIFFERENCE_IN_DAYS > 0 && DIFFERENCE_IN_HOURS % HOURS_IN_A_DAY === 0) {
    return DIFFERENCE_IN_DAYS + (DIFFERENCE_IN_DAYS === 1 ? DAY_AGO : DAYS_AGO);
  }
  if (DIFFERENCE_IN_HOURS > 0 && DIFFERENCE_IN_MINUTES % MINUTES_IN_A_HOUR === 0) {
    return DIFFERENCE_IN_HOURS + (DIFFERENCE_IN_HOURS === 1 ? HOUR_AGO : HOURS_AGO);
  }
  if (DIFFERENCE_IN_MINUTES > 0 && DIFFERENCE_IN_SECONDS % SECONDS_IN_A_MINUTE === 0) {
    return DIFFERENCE_IN_MINUTES + (DIFFERENCE_IN_MINUTES === 1 ? MINUTE_AGO : MINUTES_AGO);
  }
  if (DIFFERENCE_IN_SECONDS > 0 && DIFFERENCE_IN_MILLISECONDS % MILLI_SECONDS_IN_A_SECOND === 0) {
    return DIFFERENCE_IN_SECONDS + (DIFFERENCE_IN_SECONDS === 1 ? SECOND_AGO : SECONDS_AGO);
  }
  return JUST_NOW;
}

export { timeWas };
