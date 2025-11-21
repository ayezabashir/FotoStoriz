import { ContentSection } from './ContentSection'
import img_desk from '/src/assets/img2_desktop.webp';
import img_mb from '/src/assets/img2_mobile.webp';
import img2_desk from '/src/assets/img3_desktop.webp';
import img2_mb from '/src/assets/img3_mobile.webp';

const FeatureBlock = () => {
  return (
    <>
    <ContentSection
    title = "Timeless tales, every time"
    description = "Capture the moments that matter most. Every photo tells a story. From everyday memories to special milestones, we turn your life into beautiful stories."
    img_mb = {img_mb}
    img_desk = {img_desk}
    reverse = {true}
    dark = {false}
    />
    <ContentSection
    title = "Made to fit every story"
    description = "Whether you're a casual snapshooter or a professional photographer, our platform is designed to meet your needs. Enjoy seamless organization, easy sharing, and stunning displays tailored for all types of users."
    img_mb = {img2_mb}
    img_desk = {img2_desk}
    reverse = {false}
    dark = {true}
    />
    </>
  )
}

export default FeatureBlock