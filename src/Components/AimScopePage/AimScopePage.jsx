import React from 'react'
import AimandScope from '../../Shared/Components/Aim and Scope/AimandScope'
import HelmetComponent from '../Helmet/HelmetProvider'

function AimScopePage() {
    return (
        <>
            <HelmetComponent title="Scope - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/scope'} />
            <AimandScope />
        </>
    )
}

export default AimScopePage
