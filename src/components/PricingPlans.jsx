import PricingPlanComponent from './PricingPlanComponent'

const plans = [
  {
    plan_name: "Free Plan",
    plan_desc: "plan for beginners",
    price: "Free",
    benefits: ["20 uploads", "5 stories", "Basic templates "],
    bg_purple: false,
    btn_text: "Start Free"
  },
  {
    plan_name: "Pro Plan",
    plan_desc: "plan for professionals",
    price: "$300",
    benefits: ["Unlimited uploads", "Unlimited stories", "Custom templates"],
    bg_purple: true,
    btn_text: "Upgrade Now"
  },
  {
    plan_name: "Creator Plan",
    plan_desc: "plan for creators",
    price: "$800",
    benefits: ["Everything in Pro", "Collaboration", "Export tools"],
    bg_purple: false,
    btn_text: "Go Creator"
  }
]

const PricingPlans = () => {
  return (
    <div className='mx-7 my-7 md:my-36'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center'>
        {
          plans.map((plan, index) => (
            <PricingPlanComponent
              key={index}
              plan_name={plan.plan_name}
              plan_desc={plan.plan_desc}
              plan_price={plan.price}
              plan_benefits={plan.benefits}
              bg_purple={plan.bg_purple}
              plan_btn={plan.btn_text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PricingPlans