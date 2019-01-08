import { connect } from 'react-redux'

import Header from '../components/Header/Header'

import {
  getTotalLaunches,
  getTotalSuccededLaunches,
  getTotalUpcomingLaunches
} from '../selectors/entities'

const mapStateToProps = state => ({
  totalLaunches: getTotalLaunches(state),
  totalSuccededLaunches: getTotalSuccededLaunches(state),
  totalUpcomingLaunches: getTotalUpcomingLaunches(state)
})

export default connect(mapStateToProps, null)(Header)