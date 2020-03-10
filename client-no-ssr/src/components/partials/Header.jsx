import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


import Search from '../elements/Search'

import './Header.scss'

const Header = props => {
  return (
    <header>
      <Link to={'/'} className='home-link'>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Search />
    </header>
  )
}

export default Header
