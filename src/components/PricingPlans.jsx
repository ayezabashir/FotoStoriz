import PricingPlanComponent from './PricingPlanComponent'

const plans = [
  {
    plan_name: "Free Plan",
    price: "Free",
    benefits: ["20 uploads", "5 stories", "Basic templates "],
    btn_text: "Start Free"
  },
  {
    plan_name: "Pro Plan",
    price: "$300",
    benefits: ["Unlimited uploads", "Unlimited stories", "Custom templates"],
    btn_text: "Upgrade Now"
  },
  {
    plan_name: "Creator Plan",
    price: "$800",
    benefits: ["Everything in Pro", "Collaboration", "Export tools"],
    btn_text: "Go Creator"
  }
]

const PricingPlans = () => {
  return (
    <div className='mx-7 my-4'>
      {
        plans.map((plan, index) => (
          <PricingPlanComponent
            key={index}
            plan_name={plan.plan_name}
            plan_price={plan.price}
            plan_benefits={plan.benefits}
            plan_btn={plan.btn_text}  
          />
        ))
      }
    </div>
  )
}

export default PricingPlans