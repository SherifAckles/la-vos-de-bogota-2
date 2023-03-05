import React from 'react'
import TopNavbar from "./components/top-navbar/TopNavbar"
import HeroSection from "./components/hero-section/HeroSection"
import PodcastTopics from "./components/podcast-topics/PodcastTopics"
import Programación from "./components/programación/Programación"
import Footer from "./components/footer/Footer"


const podcastCards = [{
  id: 1,
  title: "card1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
{

  id: 2,
  title: "card3",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},
{

  id: 3,
  title: "card3",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},
{

  id: 4,
  title: "card3",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},



]
function App() {
  return (
    <div>
      <TopNavbar />
      <HeroSection />
      <PodcastTopics podcastCards={podcastCards} />
      <Programación />
      <Footer />
    </div>
  )
}

export default App