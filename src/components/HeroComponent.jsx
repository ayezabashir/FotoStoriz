import { ContentSection } from "./ContentSection"
import img1_desk from "/src/assets/img1_desktop.webp";
import img1_mb from "/src/assets/img1_mobile.webp";


const HeroComponent = () => {
  return (
    <ContentSection
      title = "Create compelling stories with your photos"
      description = "FotoSnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others"
      img_mb = {img1_mb}
      img_desk = {img1_desk}
      reverse = "false"
      dark= "true"
      className
    />
  )
}

export default HeroComponent