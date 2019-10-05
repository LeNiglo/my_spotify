import React, { useState, useEffect } from 'react'


import Track from '../elements/Track'

const Artist = props => {
  const [artist, setArtist] = useState({})

  useEffect(() => {
    const loadArtist = async () => {
      const res = await fetch(`http://localhost:8000/api/artists/${props.match.params.artistId}`)
      const json = await res.json()
      setArtist(json)
    }
    loadArtist()
  }, [props])

  return (
    <React.Fragment>
      <h1 className='site-title'>{artist.name}</h1>

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
          {artist.tracks && artist.tracks.map(track => (
            <Track key={track.id} track={track} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Artist;
