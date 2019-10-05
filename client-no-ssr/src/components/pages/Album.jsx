import React, { useState, useEffect } from 'react'

import AlbumCover from '../elements/AlbumCover'
import Track from '../elements/Track'

const Album = props => {
  const [album, setAlbum] = useState({})

  useEffect(() => {
    const loadAlbum = async () => {
      const res = await fetch(`http://localhost:8000/api/albums/${props.match.params.albumId}`)
      const json = await res.json()
      setAlbum(json)
    }
    loadAlbum()
  }, [props])

  return (
    <React.Fragment>
      <AlbumCover full={false} album={album} />
      <h1 className='site-title'>{album.name}</h1>

      <table className='track-list'>
        <thead>
          <tr>
            <th></th>
            <th>N°</th>
            <th>Title</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {album.tracks && album.tracks.map(track => (
            <Track key={track.id} track={track} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Album;
