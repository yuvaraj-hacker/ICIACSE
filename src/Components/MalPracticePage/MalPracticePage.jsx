import React from 'react'
import MalPractice from '../../Shared/Components/MalPractice/MalPractice'
import HelmetComponent from '../Helmet/HelmetProvider'

function MalPracticePage() {
    return (
        <>
            <HelmetComponent title="Malpractice - International Conference on Innovations in Advanced Computing and Software Engineering" />
            <MalPractice />
        </>
    )
}

export default MalPracticePage
