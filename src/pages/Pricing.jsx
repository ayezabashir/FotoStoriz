import PricingHeroComponent from '../components/PricingHeroComponent'
import PricingPlans from '../components/PricingPlans'
import PricingFaqs from '../components/PricingFaqs'
import QueryForm from '../components/QueryForm'

const Pricing = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <PricingHeroComponent />
      <PricingPlans />
      <PricingFaqs />
      <QueryForm />
    </div>
  )
}

export default Pricing