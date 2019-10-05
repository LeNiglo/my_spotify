import React, { useState, useEffect, useRef } from 'react'
import { Player as AudioPlayer, Media, controls } from 'react-media-player'

import Playlist from './Playlist'

import './Player.scss'

const Player = props => {
    const {
        PlayPause,
        MuteUnmute,
        CurrentTime,
        SeekBar,
        Duration,
        Volume,
    } = controls

    const [playlist, setPlaylist] = useState([])
    const [playlistShown, setPlaylistShown] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const mediaEl = useRef(null);

    useEffect(() => {
        const initPlayer = () => {
            window.player = {
                addToPlaylist: tracks => {
                    setPlaylist(prev => [...prev, ...tracks])
                },
                playTrack: track => {
                    setPlaylist([track])
                    setActiveIndex(0)
                },
            }
        }
        initPlayer()
        mediaEl.current.setVolume(0.5)
    }, [mediaEl])

    const togglePlaylist = event => {
        setPlaylistShown(!playlistShown)
    }

    const handlePlaylistSelect = event => {
        setActiveIndex(event.target.getAttribute('data-index'))
    }

    const handlePrev = event => {
        setActiveIndex(activeIndex - 1 < 0 ? playlist.length - 1 : activeIndex - 1)
    }

    const handleNext = event => {
        setActiveIndex(activeIndex + 1 >= playlist.length ? 0 : activeIndex + 1)
    }

    return (
        <React.Fragment>
            {playlistShown && <Playlist playlist={playlist} activeIndex={activeIndex} handlePlaylistSelect={handlePlaylistSelect} />}
            <div className='playlist-row'>
                <button className='playlist-btn' onClick={handlePrev}>Prev.</button>
                <button className='playlist-toggle' onClick={togglePlaylist}>{playlist[activeIndex] && playlist[activeIndex].name}</button>
                <button className='playlist-btn' onClick={handleNext}>Next.</button>
            </div>
            <div className='player-row'>
                <Media ref={mediaEl}>
                    <div className='player-media'>
                        <AudioPlayer
                            src={!playlist[activeIndex] ? null : playlist[activeIndex].mp3}
                            vendor={'audio'}
                            autoPlay={true}
                            useAudioObject={true}
                            onEnded={handleNext} />
                        <div className='player-controls'>
                            <PlayPause className="player-control player-control--play-pause" />
                            <CurrentTime className="player-control player-control--current-time" />
                            <SeekBar className="player-control player-control--time-range" />
                            <Duration className="player-control player-control--duration" />
                            <MuteUnmute className="player-control player-control--mute-unmute" />
                            <Volume className="player-control player-control--volume" />
                        </div>
                    </div>
                </Media>
            </div>
        </React.Fragment>
    )
}

export default Player
