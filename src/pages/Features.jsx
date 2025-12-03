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
     <FeatureIcons />
    </div>
  )
}

export default Features