"use client"

// Components
import Banner from './components/banner/banner'
import Navigationbar from './components/navbar/navbar'
import Skills from './components/skills/skills'
import ScrollToTop from './components/utils/ScrollToTop'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import Experience from './components/experience/experience'

export default function Home() {
  return (
    <>
    <Navigationbar />
    <div className="sections">
      <section id="about">
        <Banner />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <div className="container-fluid p-0">
        <Contact />
      </div>
      <ScrollToTop />
    </div>
    </>
  )
}
