import * as React from 'react'

export interface IHeaderProps {
  totalLaunches: string;
  totalSuccededLaunches: string;
  totalUpcomingLaunches: string
}

export default class Header extends React.Component<IHeaderProps> {
  state = {
    isDataShown: true
  }

  private toggleShowData = (): void => this.setState({ isDataShown: !this.state.isDataShown })

  render(): React.ReactNode {
    const { isDataShown } = this.state
    const {
      totalLaunches,
      totalSuccededLaunches,
      totalUpcomingLaunches
    } = this.props

    return (
      <div>
        <h1>SpaceX Launches</h1>
        <button onClick={this.toggleShowData}>{isDataShown ? 'hide' : 'show'}</button>
        {
          isDataShown && (
            <div>
              <div>total launches: { totalLaunches }</div>
              <div>succeded launches: { totalSuccededLaunches }</div>
              <div>upcoming launches: { totalUpcomingLaunches }</div>
            </div>
          )
        }
        <hr /><br />
      </div>
    )
  }
}