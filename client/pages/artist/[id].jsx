import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/layouts/Layout';
import Album from '../../components/elements/Album';

import '../../styles/pages/artist_id.scss';

const Artist = props => {
  return (
    <Layout>
      <div className='artist-header'>
        <img className='artist-header-photo' src={props.artist.photo} />
        <h1 className='site-title artist-header-name'>
          {props.artist.name}
        </h1>
        <p className='artist-description'>{props.artist.description}</p>
      </div>

      <p className='artist-bio'>{props.artist.bio}</p>

      <div className='album-list'>
        {props.artist.albums.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </Layout>
  );
};

Artist.getInitialProps = async context => {
  const res = await fetch(`http://localhost:8000/api/artists/${context.query.id}`);
  const json = await res.json();

  return {
    artist: json
  }
};

export default Artist;
