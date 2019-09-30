import { useState, useEffect } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import '../styles/sidebar.scss';

const Sidebar = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch('http://localhost:8000/api/genres');
      const json = await res.json();
      setGenres(json);
    };
    fetchGenres();
  }, []);

  return (
    <div className='sidebar'>
      <div className='genres'>
      {genres.map(genre => (
        <Link href="/genre/[id]" as={`/genre/${genre.id}`} key={genre.id}>
          <a>{genre.name}</a>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Sidebar;
