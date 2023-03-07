import { useRef, useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";


function PlayButton({ isPlaying, toggleImage, audioUrl }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="col justify-content-between align-items-center text-white d-flex">
      <div className="nav-name-tag">
        <h5 className="m-0">930 AM Bogotá</h5>
        <p className="">Música Y Más ALLá</p>
      </div>

      <button className="btn animated-btn btn-lg" onClick={toggleImage}>
        Al Aire
        <span>
          {isPlaying ? (
            <AiFillPauseCircle size="25px" />
          ) : (
            < BsFillPlayCircleFill size="25px" />
          )}
        </span>
      </button>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}

export default PlayButton;





