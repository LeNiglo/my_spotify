import React, { useState, useEffect, useRef } from 'react'

import Playlist from './Playlist'

import './Player.scss'

const Player = props => {
    const [current, setCurrent] = useState(null)
    const [playlist, setPlaylist] = useState([])
    const [playlistShown, setPlaylistShown] = useState(false)
    const refAudio = useRef({});

    useEffect(() => {
        const initPlayer = () => {
            window.player = {
                el: refAudio,
                addToPlaylist: tracks => {
                    console.log({playlist, tracks, current});
                    setPlaylist(...playlist, tracks)
                    if (!current && playlist.length) {
                        setCurrent(playlist[0])
                    }
                },
                playTrack: track => {
                    console.log({playlist, track, current});
                    setPlaylist([track])
                    setCurrent(track)
                },
            }
        }
        initPlayer()
    }, [refAudio])

    useEffect(() => {
        if (current) {
            refAudio.current.src = current.mp3
            refAudio.current.load()
            refAudio.current.play()
        }
    }, [current])

    const togglePlaylist = event => {
        event.preventDefault()

        setPlaylistShown(!playlistShown)
    }

    return (
        <React.Fragment>
            {playlistShown && <Playlist playlist={playlist} />}
            <div className='playlist-row'>
                <button className='playlist-btn'>Prev.</button>
                <button className='playlist-toggle' onClick={togglePlaylist}>{current && current.name}</button>
                <button className='playlist-btn'>Next.</button>
            </div>
            <audio controls ref={refAudio} id='player'>
                Sorry, your browser doesn't support HTML5.
            </audio>
        </React.Fragment>
    )
}

export default Player