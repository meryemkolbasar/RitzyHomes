import React from 'react'
import PageHeader from '../../components/common/page-header'
import Error404 from '../../components/errors/error404'

const Error404Page = () => {
    return(
        <>
        <PageHeader title="NOT FOUND"/>
        <Error404/>
        </>
    )
}

export default Error404Page
