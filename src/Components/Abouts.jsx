import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/about'} />
      <About />
    </>
  )
}

export default Abouts