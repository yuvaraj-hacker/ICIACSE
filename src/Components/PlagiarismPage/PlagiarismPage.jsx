import React from 'react'
import Plagiarism from '../../Shared/Components/Plagiarism/Plagiarism'
import HelmetComponent from '../Helmet/HelmetProvider'

function PlagiarismPage() {
    return (
        <>
            <HelmetComponent title="Plagiarism - International Conference on Innovations in Advanced Computing and Software Engineering" />
            <Plagiarism />
        </>
    )
}

export default PlagiarismPage
