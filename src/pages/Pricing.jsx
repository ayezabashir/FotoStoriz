import React from 'react'
import PricingHeroComponent from '../components/PricingHeroComponent'
import PricingPlans from '../components/PricingPlans'
import PricingComparisonTable from '../components/PricingComparisonTable'
import PricingFaqs from '../components/PricingFaqs'

const Pricing = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <PricingHeroComponent />
      <PricingPlans />
      <PricingComparisonTable />
      <PricingFaqs />
    </div>
  )
}

export default Pricing