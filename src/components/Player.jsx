import React, { useEffect, useRef, useState } from 'react'
import Details from './Details'
import PlayerControls from './PlayerControls'

function Player({ songs, currentSongIndex, nextSongIndex, setCurrentSongIndex }) {

  const audioEl = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  })

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        var temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      })
    } else {
      setCurrentSongIndex(() => {
        var temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      })
    }
  }

  return (
    <div className='c-player'>
      <audio src={songs[currentSongIndex].src}  ref={audioEl}></audio>
      <h4>Playing now</h4>
      <Details song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong} />
        
      <p><strong>Next
        Up:</strong>{songs[nextSongIndex].title}
        by
        {songs[nextSongIndex].artist}</p>
    </div>
  )
}

export default Player