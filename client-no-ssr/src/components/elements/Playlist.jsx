import React from 'react'

import './Playlist.scss'

const Playlist = props => {
    const { playlist } = props

    return (
        <div className='playlist'>
            <ul>
                {playlist.map(track => (
                    <li key={track.id}>
                        <a href='#'>
                            {track.name} - {track.duration}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Playlist