import React from 'react'
import Contact from '../components/contact/contact'
import Spacer from '../components/common/spacer'
import PageHeader from '../components/common/page-header'
import VisitOurOffice from '../components/contact/visit-our-office'

const ContactPage = () => {
  return (
    <>
    <PageHeader title= 'CONTACT US'/>
    <Contact/>
    <Spacer/>
    <VisitOurOffice/>
    <Spacer/>
    </>
  )
}

export default ContactPage