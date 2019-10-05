import React from 'react'
import { utils } from 'react-media-player'

import './Track.scss'

const Track = props => {
  const { formatTime } = utils
  const { track } = props

  const handleClick = event => {
    event.preventDefault()
    window.player.playTrack(track)
  }

  return (
    <tr className='album'>
      <td>
        <button onClick={handleClick}>Play</button>
      </td>
      <td>{track.track_no}</td>
      <td>{track.name}</td>
      <td>{formatTime(track.duration)}</td>
    </tr>
  )
}

export default Track
