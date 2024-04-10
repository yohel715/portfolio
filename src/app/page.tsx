"use client"

// Utils
import ScrollSpy from "react-ui-scrollspy";

// Components
import Banner from './components/banner/banner'
import Navigationbar from './components/navbar/navbar'
import About from './components/about/about'
import Skills from './components/skills/skills'
import ScrollToTop from './components/utils/ScrollToTop'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import Experience from './components/experience/experience'

export default function Home() {
  return (
    <>
    <Navigationbar />
    <ScrollSpy>
      <Banner />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      {/* <section id="portfolio">
        <Portfolio />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </ScrollSpy>
    <ScrollToTop />
    </>
  )
}
