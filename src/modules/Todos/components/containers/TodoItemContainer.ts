import { connect } from 'react-redux';
import { removeTodo, saveTodo } from 'common/actions/todos'

import TodoItem from '../TodoItem/TodoItem'

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo.success(todo)),
  saveTodo: (todo) => dispatch(saveTodo.success(todo))
})

export default connect(null, mapDispatchToProps)(TodoItem);
