import React from 'react'

const Todo = ({ data }) => {
  const { text, removeTodo } = data

  return (
    <div>
      <div onClick={removeTodo}>{text}</div>
    </div>
  )
}

export default Todo