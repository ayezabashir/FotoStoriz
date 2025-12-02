const FeatureComponent = ({ heading, icon, desc }) => {
  return (
    <div className=' h-[500px] w-1/4'>
      <div className='h-[40%] bg-white text-black text-center p-5'>
        <h2 className="font-semibold text-lg">
          {heading}
        </h2>
        <picture className="flex justify-center">
          <img className="w-20 h-20 my-3" src={icon} alt="" />
        </picture>
      </div>
      <div className='h-[60%] bg-black '>
        <p className='p-4 text-center text-white'>
          {desc} </p>
      </div>
    </div>
  )
}

export default FeatureComponent