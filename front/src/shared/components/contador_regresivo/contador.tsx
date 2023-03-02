import React, { useState, useEffect } from 'react';
'use client'
import React, { useRef,useState, useEffect } from "react";

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
const Counter: React.FC = () => {
    const [tiemerDay, stetimerDay] = useState (0);
    const [tiemerHours, stetimerHours] = useState (0);
    const [tiemerMinute, stetimerMinute] = useState (0);
    const [tiemerSeconds, stetimerSeconds] = useState (0);

    let interval = useRef();

    const startTime =() =>{
        const countdownDate = new Date("2025-01-01T00:00:00.000Z").getTime();
        
        let interval = setInterval(()=>{
        console.log("ya esta")
            const now =new Date().getTime();
            const timeDiff = countdownDate - now;
                
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);

            if( timeDiff < 0 ){
                clearInterval(interval);
            }else{
                stetimerDay(days);
                stetimerHours(hours);
                stetimerMinute(minutes);
                stetimerSeconds(seconds);
                }
        },1000);
    };
    useEffect(()=>{
        startTime();
        return () =>{
            clearInterval(interval.current)
        }
    },[])
    return (
        <div>
            <h1>Event:</h1>
            <p>
                {tiemerDay} días {tiemerHours} : {tiemerMinute} : {tiemerSeconds} 
            </p>
        </div>
        
    );
    };
    

export default Counter;
