import React from 'react'
import Publication from '../../Shared/Components/Publication/Publication'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicationPage() {
    return (
        <>
            <HelmetComponent title="Key Dates - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/key-dates'} />
            <Publication />
        </>
    )
}

export default PublicationPage
