import { connect } from 'react-redux'

import Launches from '../Launches'

import { getLaunches } from 'common/selectors/entities'
import { requestLaunches } from 'common/actions/entities'

const mapStateToProps = state => ({
  launches: getLaunches(state)
})

const mapDispatchToProps = dispatch => ({
  requestLaunches: () => dispatch(requestLaunches())
})

export default connect(mapStateToProps, mapDispatchToProps)(Launches)