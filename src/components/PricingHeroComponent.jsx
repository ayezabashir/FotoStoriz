const PricingHeroComponent = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center h-[300px] mx-7 my-4">
      <div className="w-full hidden md:block">
        <div className="absolute left-0 top-0 w-96 h-96 bg-linear-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="max-w-[400px pl-5]">
        <h1 className='text-2xl my-5 font-semibold tracking-wide capitalize '>
          Simple pricing for storytellers.
        </h1>
        <p className="text-base mb-2 text-purple-500">
          No hidden fees, no limits.  
        </p>
        <p className="italic text-sm">Choose a plan that works best for you and your audience.</p>
        <ul className="mt-5">
          <li className="text-blue-500 py-1 text-base">✓  Unlimited uploads</li>
          <li className="text-blue-500 py-1 text-base">✓  Cancel anytime</li>
          <li className="text-blue-500 py-1 text-base">✓  No ads</li>
        </ul>
      </div>
      
    </div>
  )
}

export default PricingHeroComponent