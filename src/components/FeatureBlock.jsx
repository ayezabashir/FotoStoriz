import { ContentSection } from './ContentSection'
import img_desk from '/src/assets/img2_desktop.webp';
import img_mb from '/src/assets/img2_mobile.webp';

const FeatureBlock = () => {
  return (
    <ContentSection
    title = "Timeless tales, every time"
    description = "Capture the moments that matter most. Every photo tells a story. From everyday memories to special milestones, we turn your life into beautiful stories."
    img_mb = {img_mb}
    img_desk = {img_desk}
    reverse = {true}
    dark = {false}
    />
  )
}

export default FeatureBlock