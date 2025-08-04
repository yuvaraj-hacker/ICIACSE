import React from 'react'
import PeerReview from '../../Shared/Components/Peer-Review/PeerReview'
import HelmetComponent from '../Helmet/HelmetProvider'

function PeerPage() {
    return (
        <>
            <HelmetComponent title="Conference Tracks - International Conference on Innovations in Advanced Computing and Software Engineering" canonical={'https://iciacse.com/conference-tracks'} />
            <PeerReview />
        </>
    )
}

export default PeerPage
