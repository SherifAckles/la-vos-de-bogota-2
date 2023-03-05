import React from 'react';
import TopicsHero from '../../images/topics-hero-photo.svg';
import './podcast-topics.css';

function PodcastTopics({ podcastCards }) {
  return (
    <section className="podcast-topics-container">
      <div className="section-title"></div>
      <div className="hero-section">
        <img src={TopicsHero} alt="hero-photo" />
      </div>
      <div className="card-section">
        <div className="card-row">
          {podcastCards.map((card) => (
            <div className="card" key={card.id}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PodcastTopics;
