import '../../styles/elements/track.scss';

const Track = props => {

  // TODO remove this hack
  props.track.mp3 = 'http://localhost:8000/sample.mp3';

  const calcDuration = duration => {
    const minutes = Math.floor(duration / 60);
    const secondes = duration - minutes * 60;
    return `${minutes}:${secondes}`;
  }

  const addTrackToQueue = event => {
    event.preventDefault();
    window.addTracksToQueue([
      props.track
    ]);
  }

  return (
    <tr className='track'>
      <td>
        <button className='track-play' onClick={addTrackToQueue}>&#9658;</button>
      </td>
      <td>
        <p>{props.track.track_no}</p>
      </td>
      <td>
        <p>{props.track.name}</p>
      </td>
      <td>
        <p>{calcDuration(props.track.duration)}</p>
      </td>
    </tr>
  );
};

export default Track;
