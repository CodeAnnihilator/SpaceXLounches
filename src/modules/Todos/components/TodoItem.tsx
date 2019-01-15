import React, { Component } from 'react'

import { ITodo } from 'common/types/entities'

interface IProps {
  todo: ITodo;
}

export default class TodoItem extends Component<IProps> {
  render() {
    const { todo } = this.props

    return (
      <div className="todoItem">
        { todo }
      </div>
    )
  }
}