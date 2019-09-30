import { useRouter } from 'next/router';

import Layout from '../../components/layouts/Layout';
import Album from '../../components/elements/Album';

import '../../styles/pages/genre_id.scss';

const Genre = props => {
  return (
    <Layout>
      <h1 className='site-title'>{props.genre.name}</h1>

      <div className='album-list'>
        {props.genre.albums.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </Layout>
  );
};

Genre.getInitialProps = async context => {
  const res = await fetch(`http://localhost:8000/api/genres/${context.query.id}`);
  const json = await res.json();

  // TODO remove this hack
  json.albums.length = 10;

  return {
    genre: json
  }
};

export default Genre;
