import React, { Component } from 'react'

import InfiniteScroll from 'common/components/InfiniteScroll/InfiniteScroll'
import Lounch from './components/Launch/Launch'

import { ILaunch } from 'common/types/entities'

interface IProps {
  requestLaunches(): void;
  launches: Array<ILaunch>;
}

export default class Launches extends Component<IProps> {
  componentWillMount() {
    const { requestLaunches } = this.props
    requestLaunches()
  }

  render() {
    const { launches } = this.props
    if (!launches.length) return <div>loading launches...</div>
    return (
      <InfiniteScroll>
        {
          launches.map((launch, index) => (
            <Lounch
              key={index}
              data={launch}
            />
          ))
        }
      </InfiniteScroll>
    )
  }
}
