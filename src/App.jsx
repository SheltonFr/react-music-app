import { useState } from "react";
import Player from "./components/Player";
function App() {

  const [songs, setSongs] = useState([
    {
      title: "Baby",
      artist: "Justin Bieber",
      img_src: "/images/juiceWorld.jpg",
      src: "./music/baby.mp3"
    },
    {
      title: "Hear me Calling",
      artist: "Juice Wrld",
      img_src: "/images/juiceWorld.jpg",
      src: "./music/hear-me-calling.mp3"
    },
    {
      title: "Talking To The Moons",
      artist: "Justin Bieber",
      img_src: "/images/juiceWorld.jpg",
      src: "./music/talking-to-moons.mp3"
    },
    {
      title: "Halla Madrid",
      artist: "Ukn",
      img_src: "./images/real.png",
      src: "./music/hallaMadrid.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  return (
    <div className="App">
      <Player
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
