const FeatureComponent = ({heading, icon, desc}) => {
  return (
    <div className=' h-80 w-72 '>
      <div className='h-[40%] bg-white text-black'>
        <h2>
          {heading}
        </h2>
        <picture>
          <img src={icon} alt="" />
        </picture>
      </div>
      <div className='h-[60%] bg-black '>
        <p className='p-4 text-justify text-white'>
          {desc} </p>
      </div>
    </div>
  )
}

export default FeatureComponent