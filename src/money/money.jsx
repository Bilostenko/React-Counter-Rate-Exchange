

// 1) Начальное значение счетчика должно передаваться через props +
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит +
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния +
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

import React from 'react';
import { useState, useEffect } from 'react';
import './money.css';



const Money = (props) => {

  const [res, setRes] = useState();
  const [data, setData] = useState();

  React.useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
        const data = await response.json();
        setData(data);
      };
      fetchData();
    }, []



  );
  function getExchange(i) {
    const moneyName = data.filter(item => item.cc === i);
    setRes(moneyName)
  }

  return (
    <div className="app">
      {res && res.length > 0 ? (
        <div className="counter">{Math.round(res[0].rate * 100) / 100}</div>
      ): <div className="counter">0</div>}
      <div className="controls">
        <button onClick={() => getExchange("USD")}>USD</button>
        <button onClick={() => getExchange("CAD")}>CAD</button>
        <button onClick={() => getExchange("CZK")}>CZK</button>
        <button onClick={() => getExchange("RESET")}>RESET</button>
      </div>
    </div>
  )


}


export default Money;
