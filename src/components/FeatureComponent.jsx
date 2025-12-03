import Button from "./Button"

const FeatureComponent = ({ heading, icon, desc }) => {
  return (
    <div className=' h-[380px] border-2 border-black'>
      <div className='h-[50%] bg-white text-black flex flex-col justify-center items-center p-5'>
        <h2 className="font-semibold text-lg">
          {heading}
        </h2>
        <picture className="flex justify-center">
          <img className="w-16 h-16 my-3" src={icon} alt="" />
        </picture>
      </div>
      <div className='h-[50%] bg-black py-2 flex flex-col justify-center items-center'>
        <p className='p-4 text-center text-white'>
          {desc} 
        </p>
        <Button variant="secondary" size="md" className="mx-auto border border-white text-white p-2 hover:scale-105 transition-all">
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default FeatureComponent