import React from 'react'
import EditorialBoard from '../../Shared/Components/EditorialBoard/EditorialBoard'
import HelmetComponent from '../Helmet/HelmetProvider'

function EditorialPage() {
    return (
        <>
            <HelmetComponent title="Organizing Committee - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/organizing-committee'} />
            <EditorialBoard />
        </>
    )
}

export default EditorialPage
