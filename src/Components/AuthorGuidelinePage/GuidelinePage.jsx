import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Conference on Innovations in Advanced Computing and Software Engineering" />
            <Guideline />
        </>
    )
}

export default GuidelinePage
