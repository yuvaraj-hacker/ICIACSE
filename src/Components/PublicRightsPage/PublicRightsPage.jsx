import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Conference on Innovations in Advanced Computing and Software Engineering" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage
