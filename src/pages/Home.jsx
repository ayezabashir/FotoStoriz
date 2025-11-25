import FeatureBlock from "../components/FeatureBlock"
import FeatureIcons from "../components/FeatureIcons"
import FeatureStories from "../components/FeatureStories"
import HeroComponent from "../components/HeroComponent"

const Home = () => {
  return (
    <>
      <HeroComponent />
      <FeatureBlock />
      <FeatureStories />
      <FeatureIcons />
    </>
  )
}

export default Home