import React from 'react'
import Contact from '../../Shared/Components/Contact/Contact'
import HelmetComponent from '../Helmet/HelmetProvider'

function ContactPage() {
    return (
        <>
            <HelmetComponent title="Contact Us - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/contact'} />
            <Contact />
        </>
    )
}

export default ContactPage
