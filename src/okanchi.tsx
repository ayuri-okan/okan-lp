import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import './responsive.css'
import './form.css'
import './okanchi.css'
import { OkanchiHeader, OkanchiHero, FamilyList, OkanchiOutro, OkanchiFooter } from './sections/Okanchi'
import { World } from './sections/World'

function Okanchi() {
  return (
    <>
      <a className="skip" href="#main-content">本文へ移動</a>
      <OkanchiHeader />
      <main id="main-content">
        <OkanchiHero />
        <FamilyList />
        <OkanchiOutro />
        <World />
      </main>
      <OkanchiFooter />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Okanchi />
  </React.StrictMode>,
)
