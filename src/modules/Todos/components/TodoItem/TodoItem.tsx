import React, { Component } from 'react'

import styles from './TodoItem.scss'

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

  handleSave = ({key}) => {
    if (key && key === 'Enter') this.onSave()
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

    const todoText = <p>{todo.text}</p>

    return (
      <div className={styles.todoItem}>
        {todoIndex}{') '}
        {
          !isEditing ? todoText : (
            <input
              className={styles.input}
              type='text'
              onKeyUp={this.handleSave}
              onChange={this.handleChange}
              value={nextText}
            />
          )
        }
        { !isEditing && (
          <>
            <div className={styles.button} onClick={this.onEdit}>Изменить</div>
            <div className={styles.button} onClick={this.onTodoRemove}>Удалить</div>
          </>
        )}
        { isEditing && (
          <>
            <div className={styles.button} onClick={this.onSave}>сохранить</div>
            <div className={styles.button} onClick={this.onCancel}>отмена</div>
          </>
        )}
      </div>
    )
  }
}
