import React, { Component } from 'react'
import _ from 'lodash'
import TodoList from './components/containers/TodoListContainer'


import styles from './Todos.scss'


export default class Todos extends Component<any> {

  // componentWillMount() {
  //   //const { requestTodosLists } = this.props
  //   //requestTodosLists()
  // }

  addTodoList = () => {
    const listID = _.uniqueId('Board_');
    this.props.addTodoList({
      listID,
      todos: []
    })
  }

  render() {
    const { todosLists } = this.props

    return (
      <div>
        <button onClick={this.addTodoList}>Добавить лист</button>
        <div className={styles.container}>
        {
          todosLists.map(list => (
            <TodoList
              list={list}
              key={list.listID}
              listID={list.listID}
            />
          ))
        }
        </div>
      </div>
    )
  }
}
