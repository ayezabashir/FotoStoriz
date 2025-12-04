const PricingHeroComponent = () => {
  return (
    <div className="mx-7 relative my-20 flex flex-col items-center justify-center ">
      <h1 className='text-3xl my-2 font-bold tracking-wide text-center capitalize '>
        Simple pricing for storytellers.
      </h1>
      <p className="text-base mb-1 text-black">
        No hidden fees, no limits.
      </p>
      <ul className="flex gap-0 sm:gap-5 flex-col sm:flex-row ">
        <li className="py-1 text-base">✓  Unlimited uploads</li>
        <li className="py-1 text-base">✓  Cancel anytime</li>
        <li className="py-1 text-base">✓  No ads</li>
      </ul>
    </div>
  )
}

export default PricingHeroComponent