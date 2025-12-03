const PricingHeroComponent = () => {
  return (
    <div className="mx-7 my-10 flex flex-col items-center justify-center ">
      <h1 className='text-3xl my-2 font-bold tracking-wide capitalize '>
        Simple pricing for storytellers.
      </h1>
      <p className="text-base mb-2 text-black">
        No hidden fees, no limits.
      </p>
      <ul className="flex gap-5">
        <li className="py-1 text-base">✓  Unlimited uploads</li>
        <li className="py-1 text-base">✓  Cancel anytime</li>
        <li className="py-1 text-base">✓  No ads</li>
      </ul>

    </div>
  )
}

export default PricingHeroComponent