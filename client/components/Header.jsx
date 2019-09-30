import Search from './elements/Search';
import Link from 'next/link';

import '../styles/header.scss';

const Header = () => (
  <header>
    <Link href='/'>
      <a className='home-link'>&#127968;</a>
    </Link>
    <Search />
  </header>
);

export default Header;
