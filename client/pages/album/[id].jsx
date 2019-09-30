import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/layouts/Layout';
import Track from '../../components/elements/Track';

import '../../styles/pages/album_id.scss';

const Album = props => {
  return (
    <Layout>
      <h1 className='site-title'>
        {props.album.name} -
        <small>
          <Link href='/artist/[id]' as={`/artist/${props.album.artist.id}`}>
            <a>{props.album.artist.name}</a>
          </Link>
        </small>
      </h1>

      {props.album.genres.map(genre => (
        <Link href='/genre/[id]' as={`/genre/${genre.id}`} key={genre.id}>
          <a className='album-genre'>{genre.name}</a>
        </Link>
      ))}


      <p>{props.album.description}</p>


      <table className='track-list'>
        <thead></thead>
        <tbody>
        {props.album.tracks.map(track => (
          <Track key={track.id} track={track} />
        ))}
        </tbody>
      </table>
    </Layout>
  );
};

Album.getInitialProps = async context => {
  const res = await fetch(`http://localhost:8000/api/albums/${context.query.id}`);
  const json = await res.json();

  return {
    album: json
  }
};

export default Album;
