import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopicsHero from "../../images/topics-hero-img.png";
import "./podcast-topics.css";

function PodcastTopics() {
  const topics = [
    {
      title: "Salud y Bienestar",
      description:
        "Explorando las últimas tendencias y consejos para un estilo de vida saludable.",
      image: "salud.jpg",
    },
    {
      title: "Noticias y Actualidad",
      description:
        "Análisis en profundidad y discusiones sobre las últimas noticias y eventos.",
      image: "noticias.jpg",
    },
    {
      title: "Medicina y Consejos",
      description:
        "Consejos y conocimientos de expertos sobre condiciones médicas y tratamientos.",
      image: "medicina.jpg",
    },
    {
      title: "Música y Entretenimiento",
      description:
        "Descubriendo nueva música, entrevistas a artistas y noticias de entretenimiento.",
      image: "musica.jpg",
    },
  ];

  return (
    <section className="podcast-topics-container text-dark text-center ">
      <Container>
        <Row>
          <Col xs={12} md={6} sm={12} className="hero-container">
            <main>
              <picture>
                <img
                  src={TopicsHero}
                  alt="hero-photo"
                  fluid="true"
                  className="hero-img"
                />
              </picture>
            </main>
          </Col>
          <Col xs={12} md={6} className="card-section">
            <Row xs={2} md={2} className="g-4">
              {topics.map((topic, index) => (
                <Col key={index}>
                  <div className="card">
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>
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