import React from 'react'
import ArticleProcess from '../../Shared/Components/ArticleProcessing/ArticleProcess'
import HelmetComponent from '../Helmet/HelmetProvider'

function ArticlePage() {
    return (
        <>
            <HelmetComponent title="Article Processing - International Conference on Innovations in Advanced Computing and Software Engineering" />
            <ArticleProcess />
        </>

    )
}

export default ArticlePage
