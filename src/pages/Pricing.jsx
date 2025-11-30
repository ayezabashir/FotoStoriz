import React from 'react'
import PricingHeroComponent from '../components/PricingHeroComponent'
import PricingPlans from '../components/PricingPlans'
import PricingComparisonTable from '../components/PricingComparisonTable'
import PricingFaqs from '../components/PricingFaqs'

const Pricing = () => {
  return (
    <>
      <PricingHeroComponent />
      <PricingPlans />
      <PricingComparisonTable />
      <PricingFaqs />
    </>
  )
}

export default Pricing