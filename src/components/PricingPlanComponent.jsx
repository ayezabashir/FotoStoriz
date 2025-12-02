import Button from "./Button"

const PricingPlanComponent = ({plan_name, plan_desc, plan_price,bg_purple, plan_benefits, plan_btn}) => {
  return (
    <div className='max-h-[500px] w-full md:max-w-[300px] border-2 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <div className="bg-black">
        <h1 className="text-center font-bold text-lg text-white px-3 py-6">{plan_name}</h1>
      </div>
      <div className={`${bg_purple===true ? "bg-purple-400 text-white" : "bg-white text-black"} px-4 py-8`}>
        <p className={`${bg_purple===true ? " text-white" : "text-black"} text-center capitalize text-sm font-semibold tracking-wide`}>{plan_desc}</p>
        <h2 className="text-6xl md:text-5xl lg:text-6xl text-blue-500 font-black text-center my-5">{plan_price}</h2>
        <h3 className="text-lg text-center font-semibold my-5">What Comes With It?</h3>
        <ul className="px-5">
          {
            plan_benefits.map((item, index)=>(
              <li key={index} className={`${bg_purple===true ? " text-white" : "text-black"} py-1 list-item list-disc`}>{item}</li>
            ))
          }
        </ul>
        <div className="text-center mt-10">
          <Button variant={bg_purple ===true ? "primary" : "secondary"} size={bg_purple ===true ? "md" : "sm"} className={`${bg_purple === true ? "border-0" : "border-2 py-2"} hover:scale-105 transition-transform  ease-in-out`}>
          {plan_btn}
        </Button>
        </div>
      </div>
    </div>
  )
}

export default PricingPlanComponent