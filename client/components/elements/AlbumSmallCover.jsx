import { Fragment } from 'react';
import Link from 'next/link';

import '../../styles/elements/albumsmallcover.scss';

const AlbumSmallCover = props => {
  // TODO remove this hack
  props.album.tracks = props.album.tracks.map(t => {
    t.mp3 = 'http://localhost:8000/sample.mp3';
    return t;
  })

  const addAlbumToQueue = event => {
    event.preventDefault();
    window.addTracksToQueue(props.album.tracks);
  }

  return (
    <div className='album-cover'>
      <img src={props.album.cover_small} className='album-cover-img' />
      <div className='album-cover-overlay'>
        <button className='album-cover-overlay-play' onClick={addAlbumToQueue}>&#9658;</button>
      </div>
    </div>
  )
};

export default AlbumSmallCover;
