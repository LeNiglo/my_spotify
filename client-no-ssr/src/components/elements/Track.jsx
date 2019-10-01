import React from 'react'
// import { Link } from 'react-router-dom'

import './Track.scss'

const Track = props => {
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
      <td>{track.duration}</td>
    </tr>
  )
}

export default Track
