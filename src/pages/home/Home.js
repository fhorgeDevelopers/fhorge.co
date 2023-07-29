import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import Hero from './Index'
import Switch from './Switch'

const Home = () => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '40vh'}}>
        <Switch />
  <Hero />
      </main>
      <Footer />
    </>
  )
}

export default Home
