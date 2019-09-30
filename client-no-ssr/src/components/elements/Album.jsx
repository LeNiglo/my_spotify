import React from 'react'
import { Link } from 'react-router-dom'

import './Album.scss'

const Album = props => {
  const { album } = props
  return (
    <div className='album'>
      {/* TODO add albumCover */}
      <Link to={`/album/${album.id}`}>
          <h3 className='album-name'>{album.name}</h3>
          <p className='album-description'>{album.description}</p>
      </Link>
    </div>
  )
}

export default Album
