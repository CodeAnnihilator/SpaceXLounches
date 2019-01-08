import React from 'react'
import { videoEmbedURI } from 'config/main'

import IframeLoader from 'common/components/IframeLoader/IframeLoader'

import { ILaunch } from 'common/types/entities'

interface IProps {
  data: ILaunch
}

const Lounch: React.SFC<IProps> = ({ data }) => {
  const { links, rocket, ...launch } = data
  return (
    <div>
      <h3>Mission name: { launch.mission_name }</h3>
        <img src={ links.mission_patch_small } width={100} />
        <div>Flight Number: { launch.flight_number }</div>
        <div>Lounch Date: { launch.launch_date_utc.slice(0, 10) }</div>
        <div>Lounch Time: { launch.launch_date_utc.slice(11, 16) }</div>
        <div>Rocket: { rocket.rocket_name }</div>
        { links.video_link && <IframeLoader src={videoEmbedURI(links.video_link.slice(-11))} /> }
        <div>Details: { launch.details || 'no details' }</div>
    </div>
  )
}

export default Lounch