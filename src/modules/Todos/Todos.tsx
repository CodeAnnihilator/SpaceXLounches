import React, { Component } from 'react'
import Todo from './components/Todo'

import { ITodo } from 'common/types/entities'

interface IProps {
  requestTodos(): void;
  todos: Array<ITodo>;
}

export default class Todos extends Component<IProps> {
  componentWillMount() {
    const { requestTodos } = this.props
    requestTodos()
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        {
          todos.map((todo, index) => (
            <Todo
              key={index}
              data={todo}
            />
          ))
        }
      </div>
    )
  }
}