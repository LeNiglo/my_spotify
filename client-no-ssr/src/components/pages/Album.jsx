import React, { useState, useEffect } from 'react'

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
  }, [])

  return (
    <React.Fragment>
      <h1 className='site-title'>{album.name}</h1>

      <table className='track-list'>
        <thead>
          <tr>
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
