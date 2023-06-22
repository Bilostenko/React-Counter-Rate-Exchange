import React from 'react';
import { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
      counterInit: null
    }
  }
  componentDidMount() {
    this.setState({
      counterInit: this.state.counter
    });
  }

  inc = () => {
    if (this.state.counter <= 29) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }
  dec = () => {
    if (this.state.counter >= -29) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }
   rnd = () => {
    this.setState({
      counter: Math.floor(Math.random() * (50 - (-50)) + (-50))
    })
  }
  reset = () =>{
    this.setState({
      counter: this.state.counterInit
    })
  }

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.inc}>INC</button>
          <button onClick={this.dec}>DEC</button>
          <button onClick={this.rnd}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }

}


export default App;


// 1) Начальное значение счетчика должно передаваться через props +
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит +
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния +
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов