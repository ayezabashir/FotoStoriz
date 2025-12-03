import FeatureHeroComponent from '../components/FeatureHeroComponent'
import FeatureIcons from '../components/FeatureIcons'
import PricingComparisonTable from '../components/PricingComparisonTable'

const Features = () => {
  return (
    <div>
      <FeatureHeroComponent />
      <div className='max-w-[900px] mx-auto'>
      <PricingComparisonTable />
      </div>
      <div className='max-w-[900px] mx-auto my-10 border-2 rounded-2xl border-black'>
        <FeatureIcons />
      </div>
    </div>
  )
}

export default Features