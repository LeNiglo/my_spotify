import React, { useState, useEffect } from 'react'

import Album from '../elements/Album'

const Genre = props => {
  const [genre, setGenre] = useState({})

  useEffect(() => {
    const loadGenre = async () => {
      const res = await fetch(`http://localhost:8000/api/genres/${props.match.params.genreId}`)
      const json = await res.json()
      setGenre(json)
    }
    loadGenre()
  }, [props])

  return (
    <React.Fragment>
      <h1 className='site-title'>{genre.name}</h1>

      <div className='album-list'>
        {genre.albums && genre.albums.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default Genre;
