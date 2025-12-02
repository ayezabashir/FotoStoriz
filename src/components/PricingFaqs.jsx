import Faq from './Faq'
const faqs = [
  {
    ques: "What is Foto-Storiez?",
    ans: "Foto-Storiez is a platform that allows users to create and share photo stories with ease. Foto-Storiez is a platform that allows users to create and share photo stories with ease. Foto-Storiez is a platform that allows users to create and share photo stories with ease."
  },
  {
    ques: "How much does it cost to use Foto-Storiez?",
    ans: "Foto-Storiez offers a variety of pricing plans to suit different needs, including a free tier with basic features.Foto-Storiez offers a variety of pricing plans to suit different needs, including a free tier with basic features.Foto-Storiez offers a variety of pricing plans to suit different needs, including a free tier with basic features."
  },
  {
    ques: "Can I upgrade or downgrade my plan?",
    ans: "Yes, you can upgrade or downgrade your plan at any time through your account settings. Yes, you can upgrade or downgrade your plan at any time through your account settings.Yes, you can upgrade or downgrade your plan at any time through your account settings."
  },
  {
    ques: "Is there a free trial available?",
    ans: "Yes, we offer a 14-day free trial for our premium plans. Yes, we offer a 14-day free trial for our premium plans.Yes, we offer a 14-day free trial for our premium plans."
  }
]

const PricingFaqs = () => {
  return (
    <div className='mx-4'>
      <h2 className='text-3xl text-center mb-5 font-black'>FAQ</h2>
        <div className='max-w-3xl'>
          {
          faqs.map((item, index)=>(
            <Faq key={index} ques={item.ques} ans={item.ans} />
          ))
        }
        </div>
    </div>
  )
}

export default PricingFaqs