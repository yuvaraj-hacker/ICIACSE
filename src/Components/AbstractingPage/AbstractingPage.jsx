import React from 'react'
import Abstracting from '../../Shared/Components/Abstracting/Abstracting'
import HelmetComponent from '../Helmet/HelmetProvider'

function AbstractingPage() {
    return (
        <>
            <HelmetComponent title="Paper Submission - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/paper-submission'} />
            <Abstracting />
        </>
    )
}

export default AbstractingPage
