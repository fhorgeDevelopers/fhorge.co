import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import Switch from './Switch'
import "../../css/homepage.css";
import "../../css/homepage-lower.css";
import Intro from './landing-page/Intro';
import Categories from './landing-page/Categories';

const Home = () => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '40vh' }}>
        <Intro />
        <Categories />
      </main>
      <Footer />
    </>
  )
}

export default Home
