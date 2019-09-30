import Link from 'next/link';

import AlbumSmallCover from './AlbumSmallCover';
import '../../styles/elements/album.scss';

const Album = ({ album }) => (
  <div className='album'>
    <AlbumSmallCover album={album} />
    <Link href='/album/[id]' as={`/album/${album.id}`}>
      <a>
        <h3 className='album-name'>{album.name}</h3>
        <p className='album-description'>{album.description}</p>
      </a>
    </Link>
  </div>
);

export default Album;
