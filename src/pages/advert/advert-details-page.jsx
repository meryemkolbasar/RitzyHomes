import React from 'react'
import AdvertDetailsPageHeader from '../../components/advert/advert-details-page-header'
import AdvertDetails from '../../components/advert/advert-details';
const AdvertDetailsPage = () => {
  return (
    <>
        <AdvertDetailsPageHeader
        title= 'Luxuries Villa in Central Park'
        location= 'Istanbul, Pendik'
        listingType= 'For sale'
        timeAgo= '2 weeks ago'
        listingID= '1562'
        price= '$1500.00'

        />
        <AdvertDetails />
    </>
  )
}

export default AdvertDetailsPage