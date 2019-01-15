import { connect } from 'react-redux';
import { removeTodoLists } from 'common/actions/todos';

import TodoList from '../TodoList'
import { getTodosLists } from 'common/selectors/todos'

const mapStateToProps = state => ({
  todosLists: getTodosLists(state)
})

const mapDispatchToProps = dispatch => ({
  removeTodosList: (index) => dispatch(removeTodoLists.success(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);