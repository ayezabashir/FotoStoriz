const IconCards = ({image, heading, paragraph}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-2 group'>
        <img className='w-24 mb-5 transition-transform delay-75 group-hover:scale-105' src={image} alt="feature icon" />
        <h3 className='font-bold font-2xl'>{heading}</h3>
        <p className='text-sm font-regular leading-6 text-center'>{paragraph}</p>
    </div>
  )
}

export default IconCards