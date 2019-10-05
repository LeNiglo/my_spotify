import React, { useState } from 'react'

import './Search.scss'

const Search = props => {

  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)

  }

  return (
    <input
      className='search'
      placeholder='Rock, Señorita, Gaga, ...'
      value={value}
      onChange={handleChange}
      />
  )
}

export default Search
