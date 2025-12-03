import FeatureComponent from "./FeatureComponent"
import sparkle from "/src/assets/sparkle.svg"
import cards from "/src/assets/cards.svg"
import devices from "/src/assets/devices.svg"
import layout from "/src/assets/layout.svg"

const features = [
  {
    heading: "Story-Driven Photo Layouts",
    icon: layout,
    desc : "FotoStoriz transforms your images into immersive, narrative-based layouts."
  },
  {
    heading: "Dynamic Hero Story Showcase",
    icon: sparkle,
    desc: "Your best story or featured collection automatically appears in a premium section."
  },
  {
    heading: "Interactive Story Featured Cards",
    icon: cards,
    desc: "Every story is displayed through elegant, hover-responsive cards that reveal more"
  },
  {
    heading: "Fully Responsive & Optimized",
    icon: devices,
    desc: "From large desktop screens to mobile phones, FotoStoriz adapts seamlessly."
  }
]

const FeatureHeroComponent = () => {
  return (
    <div>
      <div className="bg-black h-[300px] w-full -z-10 absolute top-20 ">
      </div>
        <div className="max-w-[1200px] py-10 mx-auto">
            <div className="mx-7 text-center">
              <h1 className="text-3xl font-bold text-white">Checkout All the Features</h1>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8">
                {
                  features.map((feature, index)=>(
                    <FeatureComponent key={index} heading={feature.heading} icon={feature.icon} desc={feature.desc} />
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureHeroComponent