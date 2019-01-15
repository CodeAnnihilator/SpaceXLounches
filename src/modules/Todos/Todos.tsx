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
    const uniqueId = _.uniqueId('Board_');
    this.props.addTodoList(uniqueId)
  }

  render() {
    const { todosLists } = this.props
    console.log(this.props)
    return (
      <div>
        <button onClick={this.addTodoList}>Добавить лист</button>
        <div className={styles.container}>
        {
          todosLists.map(list => (
            <TodoList
              todos={list}
              key={list.uniqID}
              uniqID={list.uniqID}
            />
          ))
        }
        </div>
      </div>
    )
  }
}
