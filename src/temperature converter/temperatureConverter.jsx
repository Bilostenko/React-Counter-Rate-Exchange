// Завдання: Конвертер одиниць температури

// Створіть компонент TemperatureConverter, який дозволяє користувачеві конвертувати температуру між шкалою Цельсія і Фаренгейта.

// Вимоги:

// Створіть компонент TemperatureConverter, який відображає два введення для температур, одне для введення в градусах Цельсія і інше для введення в градусах Фаренгейта.
// При зміні значення в одному з введень, відображення в іншому введенні повинно автоматично оновлюватись, використовуючи відповідну формулу конвертації.
// Використовуйте стан для збереження значень температур у компоненті.
// Це завдання допоможе вам вивчити, як використовувати setState() для оновлення відповідних частин стану, а також для взаємодії між різними полями введення та відображенням оновлених даних.

// const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
// const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
// івент.таргет.валуе

import React from "react";
import { Component } from "react";
import "./temperatureConverter.css"

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0
    }
    this.newFahrenheitValue = React.createRef()
  }

  handleFahrenheitChange = () => {
    let currentFahrenheitValue = this.newFahrenheitValue.current.value;
    let celsiusValue = ((currentFahrenheitValue - 32) * 5 / 9).toFixed(2);

      this.setState({
        celsius: celsiusValue
      })

  }

  render() {
    return (
      <div className="converter-container">
        <h2 className="converter-title">Конвертер градусів</h2>
        <div className="input-container">
          <input
            type="number"
            value={this.state.celsius}
            ref={this.newCelsiusValue}
            onChange={this.handleCelsiusChange}
            placeholder="Градуси Цельсія"
            className="input-celsius" />

          <div className="arrows">
            <div className="arrow-icon">&#129154;</div>
            <div className="arrow-icon">&#129152;</div>
          </div>

          <input
            type="number"
            // value={this.fahrenheit}
            ref={this.newFahrenheitValue}
            onChange={this.handleFahrenheitChange}
            placeholder="Градуси Фаренгейта"
            className="input-fahrenheit" />
        </div>
      </div>



    )
  }
}

export default TemperatureConverter