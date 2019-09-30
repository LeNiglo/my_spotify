import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar = props => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch('http://localhost:8000/api/genres')
      const json = await res.json()
      setGenres(json)
    }
    fetchGenres()
  }, [])

  return (
    <div className='sidebar'>
      <div className='genres'>
      {genres.map(genre => (
        <Link to={`/genre/${genre.id}`} key={genre.id}>
          {genre.name}
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Sidebar
