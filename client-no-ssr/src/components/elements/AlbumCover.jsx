import React from 'react'

import './AlbumCover.scss'

const AlbumCover = props => {
    const { album, full } = props

    const handleClick = event => {
        window.player.playAlbum(album.tracks)
    }

    return (
        <div className={full ? 'album-cover' : 'album-cover album-cover-small'}>
            <img className='album-cover-picture' src={album.cover_small} alt={album.name} />
            <div className='album-cover-overlay'>
                <button className='album-cover-overlay-play' onClick={handleClick}>Play</button>
            </div>
        </div>
    )
}

export default AlbumCover
