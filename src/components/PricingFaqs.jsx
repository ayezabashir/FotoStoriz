import Faq from './Faq'
const faqs = [
  {
    ques: "What is FotoStoriez?",
    ans: "FotoStoriez is a creative platform that allows users to turn their photos into engaging visual stories. Whether you want to document personal memories, share travel adventures, or create professional-quality narratives, FotoStoriez provides an intuitive interface with powerful editing tools to help you craft beautiful stories effortlessly."
  },
  {
    ques: "How much does it cost to use FotoStoriez?",
    ans: "FotoStoriez offers multiple pricing plans designed to fit different types of users. You can start with our free tier, which includes all the essential features for creating basic stories. For users who want advanced editing options, higher storage limits, and premium templates, we offer affordable monthly and yearly subscription plans."
  },
  {
    ques: "Can I upgrade or downgrade my plan?",
    ans: "Yes, FotoStoriez provides complete flexibility when it comes to managing your subscription. You can upgrade to a higher-tier plan to access additional features or downgrade to a simpler plan whenever you like. All changes can be easily made through your account settings, and your data remains safe throughout the transition."
  },
  {
    ques: "Is there a free trial available?",
    ans: "Absolutely! We offer a 14-day free trial for users who want to explore our premium features before committing. During the trial, you can enjoy unlimited access to advanced tools, exclusive templates, and extended storage to fully experience everything FotoStoriez has to offer."
  },
  {
    ques: "Can I collaborate with others on a photo story?",
    ans: "Yes, FotoStoriez supports real-time collaboration, allowing you to invite friends, family members, or team members to contribute to your stories. Collaborators can add photos, edit layouts, and help craft a shared narrative, making it easier to create group projects, event albums, or creative joint stories."
  },
  {
    ques: "Is my data safe on FotoStoriez?",
    ans: "Your privacy and security are our top priorities. FotoStoriez uses industry-standard encryption and secure cloud storage to protect your photos and personal information. We also follow strict data protection policies to ensure your content remains private, safe, and accessible only to you or people you choose to share it with."
  }
];

const PricingFaqs = () => {
  return (
    <div className='mx-4 mb-10 bg-gray-50 py-10'>
      <h2 className='text-3xl text-center mb-5 font-black'>Frequently Asked Questions</h2>
      <div className='px-5'>
        {
          faqs.map((item, index) => (
            <Faq key={index} ques={item.ques} ans={item.ans} />
          ))
        }
      </div>
    </div>
  )
}

export default PricingFaqs