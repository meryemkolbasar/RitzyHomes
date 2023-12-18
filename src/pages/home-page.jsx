import React from 'react'
import Content from '../components/home/content'
import Spacer from '../components/common/spacer'
import ByTypesProperties from '../components/properties/by-types-properties'
import ByCitiesProperties from '../components/properties/by-cities-properties'


const HomePage = () => {
  return (
    <>
      <Content/>
      <Spacer/>
      <ByTypesProperties/>
      <Spacer/>
      <ByCitiesProperties/>
      <Spacer/>
    </>
  )
}

export default HomePage