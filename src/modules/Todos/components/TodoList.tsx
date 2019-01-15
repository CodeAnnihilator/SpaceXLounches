import React, { Component } from 'react'

import TodoItem from './TodoItem'
import styles from './TodoList.scss'


export default class TodoList extends Component<any> {
  render() {
    const { todos, removeTodosList, uniqID } = this.props

    return (
      <div className={styles.list}>
        <p>{uniqID}</p>
        <div>
          <button className={styles.addTodoButton}>+</button>
          {
            todos.itodos.map((todo, index) => (
              <TodoItem key={index} todo={todo}></TodoItem>
            ))
          }
        </div>
        <button onClick={() => removeTodosList(uniqID)}>Удалить</button>
      </div>
    )
  }
}
