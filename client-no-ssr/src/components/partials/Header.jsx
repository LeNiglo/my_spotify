import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = props => {
  return (
    <header>
      <Link to={'/'}>
        Home
      </Link>
    </header>
  )
}

export default Header
