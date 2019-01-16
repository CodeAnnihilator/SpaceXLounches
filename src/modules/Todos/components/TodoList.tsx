import React, { Component } from 'react'
import _ from 'lodash'

import TodoItem from './containers/TodoItemContainer'
import styles from './TodoList.scss'


export default class TodoList extends Component<any> {

  state = {
    todoText: '',
  }

  addTodoToBoard = () => {
    const todoID = _.uniqueId('Todo_');
    this.props.addTodoToBoard({
      listID: this.props.listID,
      todoID,
      text: this.state.todoText
    })
    this.clearTodoInput()
  }

  handleTextChange = ({ target: { value } }) => {
    this.setState({ todoText: value })
  }

  handlePushTodo = ({key}) => key === 'Enter' ? this.addTodoToBoard() : false

  clearTodoInput = () => this.setState(() => ({ todoText: ''}))

  render() {
    const { list, removeTodosList, listID } = this.props
    const { todoText } = this.state
    return (
      <div className={styles.list}>
        <p className={styles.listTitle}>{listID}</p>
        <button className={styles.deleteListButton} onClick={() => removeTodosList(listID)} />

        <div>
          {
            list.todos.map((todo, index) => (
              <TodoItem
                key={todo.todoID}
                todoIndex={index + 1}
                listID={listID}
                todoID={todo.todoID}
                todo={todo}
              />
            ))
          }
        </div>
        <input 
            value={todoText}
            onChange={this.handleTextChange}
            onKeyUp={this.handlePushTodo}
            id={'input_' + listID}
        />
        <button className={styles.addTodoButton} onClick={this.addTodoToBoard}>+</button>
      </div>
    )
  }
}
