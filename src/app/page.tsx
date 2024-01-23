import Banner from './components/banner/banner'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Skills from './components/skills/skills'
import ScrollToTop from './components/utils/ScrollToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <ScrollToTop />
    </>
  )
}
