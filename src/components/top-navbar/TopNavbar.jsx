import React, { useState, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Logo from '../../images/logo.svg';
import HiddenImage from '../../images/radio-announcer.png'; 
import './top-navbar.css';


function TopNavbar() {
  const [showImage, setShowImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const toggleImage = () => {
    setShowImage(!showImage);
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container d-flex justify-content-center align-items-center">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            style={{ maxWidth: '100%' }}
            className="d-inline-block align-top header-logo"
            alt="La Vos de Bogota"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <div className="col justify-content-between align-items-center text-white d-flex">
            <div className="nav-name-tag">
              <h5 className="m-0">930 AM Bogotá</h5>
              <p className="">Música Y Más ALLá</p>
            </div>
            {showImage && (
              <img
                src={HiddenImage}
                alt="hidden"
                className="hidden-image"
                width="80"
                height="80"
              />
            )}
            <button className="btn animated-btn btn-lg" onClick={toggleImage}>
              Al Aire
              <span>
                <BsFillPlayCircleFill size="25px" />
              </span>
            </button>
            <audio ref={audioRef} src="https://tupanel.info:2000/stream/lavozdebogota/stream"></audio>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default TopNavbar;
