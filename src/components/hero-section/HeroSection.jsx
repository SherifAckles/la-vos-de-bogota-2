import React from 'react';
import HeroPhoto from '../../images/mic-header.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero-section.scss';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col xs={12} md={6} className="hero-text-container">
            <header>
              
              <h1>La Voz de Bogota,La mejor estación de radio para comenzar el día.</h1>
              <h2>Let's start your day</h2>
              
            </header>
          </Col>
          <Col xs={12} md={5} className="offset-md-1">
            <main>
              <picture>
                
                <img src={HeroPhoto} alt="hero-photo" className="hero-container-img" fluid="true" />
              </picture>
            </main>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
