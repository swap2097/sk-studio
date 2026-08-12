import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import StudioStatement from './components/sections/StudioStatement'
import Services from './components/Services'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function Home() {
  return (
    <main>
      <Navbar />

      {/* We'll build the hero here */}
      <section className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <Hero />
      </section>

      <FeaturedWork />

      <StudioStatement />

      <Services />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
