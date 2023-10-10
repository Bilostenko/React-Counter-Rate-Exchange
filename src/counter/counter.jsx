

// 1) Начальное значение счетчика должно передаваться через props +
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит +
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния +
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

import React from 'react';
import { useState } from 'react';
import './counter.css';



const Counter = (props) => {

  const [num, setNum] = useState(10);

  function inc() {
    return (
      setNum(num + 1)
    )
  }

  function dec() {
    return(
      setNum(num - 1)
    )
  }

  function rnd() {
    return(
      setNum(Math.floor(Math.random() * 100 - 50))
    )
  }

function  init() {
    return(
      setNum(10)
    )
  }



  return (
    <div className="app">
      <div className="counter">{num}</div>
      <div className="controls">
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={rnd}>RND</button>
        <button onClick={init}>RESET</button>
      </div>
    </div>
  )


}


export default Counter;
