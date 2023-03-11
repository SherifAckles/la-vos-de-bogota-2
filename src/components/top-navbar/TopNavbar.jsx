import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import LogoImage from "../../images/logo.png";
import RadioAnnouncerImage from "../../images/radio-announcer.png";
import "./top-navbar.scss";

function Logo() {
  return (
    <Navbar.Brand href="/">
      <img
        src={LogoImage}
        className="logo"
        alt="La Vos de Bogota"
      />
    </Navbar.Brand>
  );
}



function RadioAnnouncer({ showImage }) {
  return showImage && (
    <img
      src={RadioAnnouncerImage}
      alt="hidden"
      className="radio-announcer"
      // style={{
      //   position: "absolute",
      //   left: "50%",
      //   transform: "translateX(-50%) translateY(45px)", // Move the image 20px down
      //   width: "80px",
      //   height: "80px",
      //   "@media (max-width: 768px)": {
      //     left: "50%",
      //     bottom: "10rem",
         
      //   },
      // }}
    />
  );
}



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
    <div className="col justify-content-between align-items-center text-white d-flex ">
      
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
            <BsFillPlayCircleFill size="25px" />
          )}
        </span>
      </button>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}

function TopNavbar() {
  const [showImage, setShowImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleImage = () => {
    setShowImage(prevState => !prevState);
    setIsPlaying(prevState => !prevState);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container d-flex justify-content-between align-items-center">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <PlayButton
            isPlaying={isPlaying}
            toggleImage={toggleImage}
            audioUrl="https://tupanel.info:2000/stream/lavozdebogota"
          />
        </Navbar.Collapse>
      </div>
      <RadioAnnouncer showImage={showImage} />
    </Navbar>
  );
}



export default TopNavbar;
