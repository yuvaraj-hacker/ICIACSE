import React from 'react'
import Issues from '../../Shared/Components/Issues/Issues'
import HelmetComponent from '../Helmet/HelmetProvider'

function IssuePage() {
    return (
        <>
            <HelmetComponent title="Editorial Board - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/editorial-board'} />
            <Issues />
        </>
    )
}

export default IssuePage
