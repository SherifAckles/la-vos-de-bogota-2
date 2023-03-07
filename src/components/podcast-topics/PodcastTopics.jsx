import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopicsHero from '../../images/topics-hero-photo.svg';
import './podcast-topics.css';

function PodcastTopics({ podcastCards }) {
  return (
    <section className="podcast-topics-container">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="card-section">
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
            </div>
          </Col>
          <Col xs={12} md={5} className="offset-md-1 ">
            <main>
              <picture>
                <img
                  src={TopicsHero}
                  alt="hero-photo"
                  className="hero-container-img"
                  fluid="true"
                />
              </picture>
            </main>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PodcastTopics;
