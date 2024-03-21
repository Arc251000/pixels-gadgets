import React, { useEffect, useState } from 'react';
import '../css/tree_tuple.css'; // Archivo de estilos CSS para la barra de navegación

function TreeTuple({index, timestamp}){

  
  const [remainingTime,setRemainingTime] = useState('');

  const getDateByLong = (timestamp)=>{
    let date = new Date();
    date.setTime(timestamp);
    return date;
  }

  const getRemainingTime = (timestamp)=>{
    let date = new Date();
    let remainingTime = (timestamp - date.getTime())/1000;
    
    return remainingTime>=0?`${Math.floor(remainingTime / 60)}:${Math.floor(remainingTime % 60)}`:'0:00';
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(timestamp));
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  
  return (
        <tr>
            <th className='tuple-element'>{index}</th>
            <th className='tuple-element'>{getDateByLong(timestamp).toLocaleString()}</th>
            <th className='tuple-element'>{remainingTime}</th>
        </tr>
  );
};

export default TreeTuple;