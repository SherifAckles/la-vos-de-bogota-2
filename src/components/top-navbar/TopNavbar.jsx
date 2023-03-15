import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import LogoImage from "../../images/logo.png";
import RadioAnnouncerImage from "../../images/radio-announcer.png";
import "./top-navbar.scss";

function TopNavbar() {
  const [showImage, setShowImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleImage = () => {
    setShowImage(prevState => !prevState);
    setIsPlaying(prevState => !prevState);
  };

  return (
    <section className="navbar">
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/">
        <img src={LogoImage} className="logo" alt="La Voz de Bogota" width="200" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <div className="col justify-content-between align-items-center text-white d-flex ">
            <div className="nav-name-tag">
              <h5 className="m-0">930 AM Bogotá</h5>
              <p className="">Música Y Más ALLá</p>
            </div>
            <button
              className="btn animated-btn btn-lg"
              onClick={toggleImage}
            >
              Al Aire
              <span>
                {isPlaying ? (
                  <AiFillPauseCircle size="25px" />
                ) : (
                  <BsFillPlayCircleFill size="25px" />
                )}
              </span>
            </button>
            <audio
              ref={audioRef}
              src="https://tupanel.info:2000/stream/lavozdebogota"
            />
          </div>
        </Navbar.Collapse>
      </div>
      {showImage && (
        <img
          src={RadioAnnouncerImage}
          alt="hidden"
          className="radio-announcer"
        />
      )}
      </Navbar>
      </section>
  );
}

export default TopNavbar;
