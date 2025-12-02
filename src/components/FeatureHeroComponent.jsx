import FeatureComponent from "./FeatureComponent"

const FeatureHeroComponent = () => {
  return (
    <div className="bg-black h-[300px]">
        <div className="max-w-[1200px] py-10 mx-auto">
            <div className="mx-7 text-center">
              <h1 className="text-3xl font-bold text-white">Checkout All the Features</h1>
              <FeatureComponent />
            </div>
        </div>
    </div>
  )
}

export default FeatureHeroComponent