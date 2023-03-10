import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopicsHero from '../../images/topics-hero-img.png';
import './podcast-topics.css';

function PodcastTopics({ podcastCards }) {
  return (
    <section className="podcast-topics-container text-dark text-center ">
      
      <Container>
        <Row>
          <Col xs={12} md={6} sm={12} className="hero-container-img">
            <main>
              <picture>
                <img
                  src={TopicsHero}
                  alt="hero-photo"

                  fluid="true"
                />
              </picture>
            </main>
          </Col>
          <Col xs={12} md={6} className="card-section">

            <Row xs={2} md={2} className="g-4">
              {podcastCards.map((card) => (
                <Col key={card.id}>
                  <div className="card">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default PodcastTopics;
