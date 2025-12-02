import FeatureComponent from "./FeatureComponent"
import sparkle from "/src/assets/sparkle.svg"
import cards from "/src/assets/cards.svg"
import devices from "/src/assets/devices.svg"
import layout from "/src/assets/layout.svg"

const features = [
  {
    heading: "Story-Driven Photo Layouts",
    icon: layout,
    desc : "FotoStoriz transforms your images into immersive, narrative-based layouts. Each story section is crafted to highlight emotions & moments"
  },
  {
    heading: "Dynamic Hero Story Showcase",
    icon: sparkle,
    desc: "Your best story or featured collection automatically appears in a premium hero section with large imagery, date, and context. "
  },
  {
    heading: "Interactive Story Featured Cards",
    icon: cards,
    desc: "Every story is displayed through elegant, hover-responsive cards that reveal more details as users interact. "
  },
  {
    heading: "Fully Responsive & Optimized",
    icon: devices,
    desc: "From large desktop screens to mobile phones, FotoStoriz adapts seamlessly. Images resize intelligently, text scales for readability"
  }
]

const FeatureHeroComponent = () => {
  return (
    <div className="bg-black h-[300px]">
        <div className="max-w-[1200px] py-10 mx-auto">
            <div className="mx-7 text-center">
              <h1 className="text-3xl font-bold text-white">Checkout All the Features</h1>
              <div className="flex justify-between gap-8">
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