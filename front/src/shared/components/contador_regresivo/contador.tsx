import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const startTime = new Date('2022-01-01T00:00:00.000Z');
  const timeDiff = Math.abs(time.getTime() - startTime.getTime());
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return (
    <div>
      <h1>Contador de tiempo:</h1>
      <p>{days} días, {hours} horas, {minutes} minutos, {seconds} segundos</p>
    </div>
  );
};

export default Counter;