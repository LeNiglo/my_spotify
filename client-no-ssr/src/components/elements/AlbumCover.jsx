import React from 'react'

import './AlbumCover.scss'

const AlbumCover = props => {
    const { album } = props

    const handleClick = event => {
        event.preventDefault()
        window.player.addToPlaylist(album.tracks)
    }

    return (
        <div className='album-cover'>
            <img className='album-cover-picture' src={album.cover_small} alt={album.name} />
            <div className='album-cover-overlay'>
                <button className='album-cover-overlay-play' onClick={handleClick}>Play</button>
            </div>
        </div>
    )
}

export default AlbumCover