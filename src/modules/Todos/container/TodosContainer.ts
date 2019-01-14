import { connect } from 'react-redux';
import { requestTodos } from 'common/actions/todos';
import Todos from '../Todos'
import { getTodos } from 'common/selectors/todos'

const mapStateToProps = state => ({
  launches: getTodos(state)
})

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);