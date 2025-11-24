import FeatureBlock from "../components/FeatureBlock"
import FeatureStories from "../components/FeatureStories"
import Header from "../components/Header"
import HeroComponent from "../components/HeroComponent"

const Home = () => {
  return (
    <>
      <HeroComponent />
      <FeatureBlock />
      <FeatureStories />
    </>
  )
}

export default Home