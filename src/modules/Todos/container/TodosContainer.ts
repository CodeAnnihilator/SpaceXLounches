import { connect } from 'react-redux';
import { requestTodosLists } from 'common/actions/todos';
import Todos from '../Todos'
import { getTodosLists } from 'common/selectors/todos'

const mapStateToProps = state => ({
  todosLists: getTodosLists(state)
})

const mapDispatchToProps = dispatch => ({
  requestTodosLists: () => dispatch(requestTodosLists.request()),
  addTodoList: (newTodoList) => dispatch(requestTodosLists.success(newTodoList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
