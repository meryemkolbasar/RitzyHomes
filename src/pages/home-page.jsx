import React from 'react'
import Content from '../components/home/content'
import Spacer from '../components/common/spacer'
import ByTypesProperties from '../components/properties/by-types-properties'
import ByCitiesProperties from '../components/properties/by-cities-properties'
import DreamHouse from '../components/dream-house/dream-house'
import DiscoverPopularProperties from '../components/properties/discover-popular-properties'
import SellingOptions from '../components/selling-options/selling-options'
import NeddHelp from '../components/help/need-help'


const HomePage = () => {
  return (
    <>
      <Content/>
      <Spacer/>
      <ByTypesProperties/>
      <Spacer/>
      <ByCitiesProperties/>
      <Spacer/>
      <DreamHouse/>
      <Spacer/>
      <DiscoverPopularProperties/>
      <Spacer/>
      <SellingOptions/>
      <Spacer/>
      <Spacer/>
      <NeddHelp/>
      <Spacer/>
    </>
  )
}

export default HomePage