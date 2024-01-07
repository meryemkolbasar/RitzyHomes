import React from 'react'
import PageHeader from '../../components/common/page-header'
import Error401 from '../../components/errors/error401'

const Error401Page = () => {
    return(
        <>
        <PageHeader title="Unauthorized"/>
        <Error401/>
        </>
    )
}

export default Error401Page