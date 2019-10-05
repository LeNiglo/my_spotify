import React from 'react'
import { Link } from 'react-router-dom'

import Search from '../elements/Search'

import './Header.scss'

const Header = props => {
  return (
    <header>
      <Link to={'/'} className='home-link'>Home</Link>
      <Search />
    </header>
  )
}

export default Header
