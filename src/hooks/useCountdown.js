import { useState, useEffect } from "react";
const calculateTimeLeft = (date, time) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const [hours, minutes, seconds] = time.split(":").map(Number);
  const [year, month, day] = date.split("-").map(Number);
  const targetDate = new Date(year, month - 1, day, hours, minutes, seconds);

  const difference = targetDate - now;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[targetDate.getDay()];

  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfToday.getDate() + 1);

  const startOfNextWeek = new Date(startOfToday);
  startOfNextWeek.setDate(startOfToday.getDate() + 7);

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      dayOfWeek,
    };

    if (targetDate < startOfTomorrow) {
      timeLeft.ExpireIn = 1;
    } else if (targetDate < startOfNextWeek) {
      timeLeft.ExpireIn = 7;
    } else {
      timeLeft.ExpireIn = 10;
    }
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      dayOfWeek: "Expired",
      ExpireIn: 0,
    };
  }

  return timeLeft;
};

function useCountdown(date, time) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date, time));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(date, time);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [date, time]);

  return timeLeft;
}

export default useCountdown;
