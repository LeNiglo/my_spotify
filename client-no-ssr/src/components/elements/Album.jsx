import React from 'react'
import { Link } from 'react-router-dom'

import AlbumCover from './AlbumCover'

import './Album.scss'

const Album = props => {
  const { album } = props
  return (
    <div className='album'>
      <AlbumCover album={album} />
      <Link to={`/album/${album.id}`}>
          <h3 className='album-name'>{album.name}</h3>
          <p className='album-description'>{album.description}</p>
      </Link>
    </div>
  )
}

export default Album
