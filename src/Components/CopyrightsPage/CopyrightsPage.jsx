import React from 'react'
import Copyrights from '../../Shared/Components/Copyrights/Copyrights'
import HelmetComponent from '../Helmet/HelmetProvider'

function CopyrightsPage() {
    return (
        <>
            <HelmetComponent title="Copyrights - International Conference on Innovations in Advanced Computing and Software Engineering" />
            <Copyrights />
        </>
    )
}

export default CopyrightsPage
