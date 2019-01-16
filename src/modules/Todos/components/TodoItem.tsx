import React, { Component } from 'react'

interface IProps {
  todo: { todoID: string, text: string };
  todoIndex: string;
  listID: string;
  todoID: string;
  key: string;
  saveTodo: any;
  removeTodo: any
}

interface IState {
  nextText: string;
  isEditing: boolean;
}

export default class TodoItem extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      nextText: props.todo.text,
      isEditing: false
    }
  }

  onEdit = () => this.setState({ isEditing: true })

  onSave = () => {
    const { listID, todoID } = this.props
    this.props.saveTodo({
      listID,
      todoID,
      text: this.state.nextText
    })
    this.setState({ isEditing: false})
  }

  onCancel = () => {
    this.setState({
      nextText: this.props.todo.text,
      isEditing: false
    })
  }

  onTodoRemove = () => {
    const { listID, todoID } = this.props
    this.props.removeTodo({
      listID,
      todoID
    })
  }

  handleChange = ({ target: { value } }) => this.setState({ nextText: value })

  render() {
    const { todo, todoIndex } = this.props
    const { isEditing, nextText } = this.state

    return (
      <div className="todoItem">
        {todoIndex})
        <br />
        {
          !isEditing ? todo.text : (
            <input
              type='text'
              onChange={this.handleChange}
              value={nextText}
            />
          )
        }
        { !isEditing && (
          <>
            <div onClick={this.onEdit}>Изменить</div>
            <div onClick={this.onTodoRemove}>Удалить</div>
          </>
        )}
        { isEditing && (
          <>
            <div onClick={this.onSave}>сохранить</div>
            <div onClick={this.onCancel}>отмена</div>
          </>
        )}
      </div>
    )
  }
}
