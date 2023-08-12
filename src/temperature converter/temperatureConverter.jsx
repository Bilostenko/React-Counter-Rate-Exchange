// Завдання: Конвертер одиниць температури

// Створіть компонент TemperatureConverter, який дозволяє користувачеві конвертувати температуру між шкалою Цельсія і Фаренгейта.

// Вимоги:

// Створіть компонент TemperatureConverter, який відображає два введення для температур, одне для введення в градусах Цельсія і інше для введення в градусах Фаренгейта.
// При зміні значення в одному з введень, відображення в іншому введенні повинно автоматично оновлюватись, використовуючи відповідну формулу конвертації.
// Використовуйте стан для збереження значень температур у компоненті.
// Це завдання допоможе вам вивчити, як використовувати setState() для оновлення відповідних частин стану, а також для взаємодії між різними полями введення та відображенням оновлених даних.

import React from "react";
import { Component } from "react";
import "./temperatureConverter.css"

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: ''
    };
  }

  handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    const fahrenheitValue = (celsiusValue * 9 / 5 + 32).toFixed(2);

    this.setState({
      celsius: celsiusValue,
      fahrenheit: fahrenheitValue
    });
  };

  handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    const celsiusValue = ((fahrenheitValue - 32) * 5 / 9).toFixed(2);

    this.setState({
      celsius: celsiusValue,
      fahrenheit: fahrenheitValue
    });
  };

  render() {
    return (
      <div className="converter-container">
        <h2 className="converter-title">Temperature converter</h2>
        <div className="input-container">
          <span>Degrees Celsius &#8451;</span>
          <input
            type="number"
            value={this.state.celsius}
            onChange={this.handleCelsiusChange}
            className="input-celsius"
          />

          <div className="arrows">
            <div className="arrow-icon">&#129154;</div>
            <div className="arrow-icon">&#129152;</div>
          </div>

          <input
            type="number"
            value={this.state.fahrenheit}
            onChange={this.handleFahrenheitChange}
            className="input-fahrenheit"
          />
          <span>Degrees Fahrenheit &#8457;</span>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter