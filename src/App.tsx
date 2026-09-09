import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Memory } from './sections/Memory'
import { Works } from './sections/Works'
import { Present } from './sections/Present'
import { Flow } from './sections/Flow'
import { Moments } from './sections/Moments'
import { Follow } from './sections/Follow'
import { Faq } from './sections/Faq'
import { Apply } from './sections/Apply'
import { Footer, MobileBar } from './sections/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main-content">本文へ移動</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Memory />
        <Works />
        <Present />
        <Flow />
        <Moments />
        <Follow />
        <Faq />
        <Apply />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
