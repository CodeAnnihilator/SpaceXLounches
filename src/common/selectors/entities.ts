import { createSelector } from 'reselect'

export const getLaunches = state => state.entities.launches

export const getTotalLaunches = state => state.entities.launches.length

export const getTotalSuccededLaunches = createSelector(
  [getLaunches],
  (launches) => {
    const succededLaunches = launches.filter(launch => launch.launch_success)
    return succededLaunches.length
  }
)

export const getTotalUpcomingLaunches = createSelector(
  [getLaunches],
  (launches) => {
    const upcomingLaunches = launches.filter(launch => launch.upcoming)
    return upcomingLaunches.length
  }
)