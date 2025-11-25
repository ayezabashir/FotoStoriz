import embed_icon from "/src/assets/embed.png";
import unlimited_icon from "/src/assets/unlimited.png";
import responsive_icon from "/src/assets/responsive.png";
import IconCards from "./IconCards";

const feature_icons = [
  {
    feature_icon : responsive_icon,
    feature_heading : "100% Responsive",
    feature_paragraph : "No matter which device you're on, our site is fully responsive and stories look beautiful on any screen."
  },
  {
    feature_icon : unlimited_icon,
    feature_heading : "Unlimited Photo Uploads",
    feature_paragraph : "Easily upload your stories and photos to our platform without any limits. Share your moments with the world."
  },
  {
    feature_icon : embed_icon, 
    feature_heading : "Embed to Social Media",
    feature_paragraph : "Easily share your stories on social media platforms. Embed your stories to reach a wider audience."
  }

]

const FeatureIcons = () => {
  return (
    <div className="flex flex-col md:flex-row md:max-w-[900px] mx-auto my-5 gap-3">
      {
        feature_icons.map((icon, index)=>(
          <IconCards key={index} image={icon.feature_icon} heading={icon.feature_heading} paragraph={icon.feature_paragraph} />
        ))
      }
    </div>
  )
}

export default FeatureIcons