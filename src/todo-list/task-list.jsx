// Задача: Простий список завдань

// Створіть компонент, який буде відображати список завдань. Ви зможете додавати нові завдання до списку та видаляти існуючі.

// Вимоги:

// Створіть компонент TaskList, який буде відображати список завдань.
// В TaskList додайте можливість додавати нові завдання до списку за допомогою текстового поля та кнопки "Додати".
// Кожне завдання повинно мати кнопку для видалення.
// Коли видаляється завдання, воно має зникати зі списку.

import React from "react"
import { Component } from 'react';
import "./task-list.css"



class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: []
    }
    this.newMessageElement = React.createRef()
  }

  handleMessage = () => {
    let message = this.newMessageElement.current.value;

    if (message) {
      var messageArr = [...this.state.message, message]
      this.setState({
        message: messageArr
      });
      this.newMessageElement.current.value = ""
    }
  }

  deleteItem = (index) => {
    let updateMessage = [...this.state.message]
    updateMessage.splice(index, 1)

    this.setState({
      message: updateMessage
    })
  }


  render() {
    return (
      <div className="task_list-wrapper">
        <h1>Todo list</h1>
        <div className="task-info">
          <input
            type="text"
            className="task_list-input"
            ref={this.newMessageElement}
            placeholder="Type your message"></input>
          <button className="add-task" onClick={this.handleMessage}>Add</button>
        </div>
        <ul className="task">
          {this.state.message.map((message, index) => {
            return (
              <li className="task-text" key={index}>{message}
                <button className="delete-task" onClick={() => this.deleteItem(index)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>

    )
  }
}

export default TaskList
