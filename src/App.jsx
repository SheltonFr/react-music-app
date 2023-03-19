import { useEffect, useState } from "react";
import Player from "./components/Player";
function App() {

  const [songs] = useState([
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
      img_src: "./images/real.jpg",
      src: "./music/hallaMadrid.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)


  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} />
    </div>
  );
}

export default App;
