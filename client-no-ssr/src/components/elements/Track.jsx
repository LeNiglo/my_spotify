import React from 'react'
import { Link } from 'react-router-dom'

import './Track.scss'

const Track = props => {
  const { track } = props
  return (
    <tr className='album'>
      <td>{track.track_no}</td>
      <td>{track.name}</td>
      <td>{track.duration}</td>
    </tr>
  )
}

export default Track
