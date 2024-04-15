
export const scheduleDailyTask = (hour: number, minute: number, callback: () => void) => {
  const now = new Date();
  const then = new Date(now);
  
  then.setHours(hour);
  then.setMinutes(minute);
  then.setSeconds(0);
  then.setMilliseconds(0);

  // If the time has already passed today, schedule for tomorrow
  if (now.getTime() > then.getTime()) {
    then.setDate(then.getDate() + 1);
  }

  const delay = then.getTime() - now.getTime();

  return setTimeout(() => {
    callback();
    // Schedule the task for tomorrow
    scheduleDailyTask(hour, minute, callback);
  }, delay);
}