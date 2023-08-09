import React from "react"
import "./task-list.css"

// addTask = () =>{
//   return(

//   )
// }

const TaskList = () => {
  return (
    <div className="task_list-wrapper">
      <h1>Todo list</h1>
      <div className="task-info">
        <input type="text" className="task_list-input" />
        {/* <button className="add-task" onClick={addTask}>Add</button> */}

      </div>
      <div className="task">
        <h2 className="task-text">test text</h2>
        <button className="delete-task">Delete</button>
      </div>


    </div>
  )
}

export default TaskList


// Задача: Простий список завдань

// Створіть компонент, який буде відображати список завдань. Ви зможете додавати нові завдання до списку та видаляти існуючі.

// Вимоги:

// Створіть компонент TaskList, який буде відображати список завдань.
// В TaskList додайте можливість додавати нові завдання до списку за допомогою текстового поля та кнопки "Додати".
// Кожне завдання повинно мати кнопку для видалення.
// Коли видаляється завдання, воно має зникати зі списку.