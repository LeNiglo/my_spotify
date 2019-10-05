import React from 'react'
import { utils } from 'react-media-player'

import './Playlist.scss'

const Playlist = props => {
    const { formatTime } = utils

    return (
        <div className='playlist'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Album</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {props.playlist.map((track, index) => (
                        <tr key={track.id} className={props.activeIndex === index ? 'current-track' : ''}>
                            <td>
                                <button onClick={props.handlePlaylistSelect} data-index={index}>Play</button>
                            </td>
                            <td>{track.name}</td>
                            <td>{formatTime(track.duration)}</td>
                            <td>{track.album.name}</td>
                            <td>{track.album.artist.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Playlist
