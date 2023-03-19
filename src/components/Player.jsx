import React from 'react'
import Details from './Details'
import PlayerControls from './PlayerControls'

function Player({ song, nextSong }) {
  return (
    <div className='c-player'>
      <audio></audio>
      <h4>Playing now</h4>
      <Details song={song} />
      <PlayerControls />
      <p><strong>Next Up:</strong>{nextSong.title} by {nextSong.artist}</p>
    </div>
  )
}

export default Player