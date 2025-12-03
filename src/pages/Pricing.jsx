import PricingHeroComponent from '../components/PricingHeroComponent'
import PricingPlans from '../components/PricingPlans'
import PricingFaqs from '../components/PricingFaqs'

const Pricing = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <PricingHeroComponent />
      <PricingPlans />
      <PricingFaqs />
    </div>
  )
}

export default Pricing