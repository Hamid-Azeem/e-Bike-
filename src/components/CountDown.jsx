import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = localStorage.getItem('targetTime');
    const difference = targetTime - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const storedTargetTime = localStorage.getItem('targetTime');
    if (!storedTargetTime) {
      const now = new Date().getTime();
      const targetTime = now + (10 * 24 * 60 * 60 * 1000); // 10 days from now
      localStorage.setItem('targetTime', targetTime);
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" p-6 border border-black md:w-[22rem] w-[20rem] rounded-lg flex gap-3 justify-center">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.days}</span>
        <span>Days</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.hours}</span>
        <span>Hours</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        <span>Minutes</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
