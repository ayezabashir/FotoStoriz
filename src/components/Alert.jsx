import check from "/src/assets/check.svg"
const Alert = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm'>
        <div className='flex flex-col gap-6 items-center justify-center border-2 rounded-3xl border-black px-10 py-16'>
            <picture className="border-2 rounded-full p-2 ">
                <img src={check} alt="check icon" className="w-12 h-12" />
            </picture>
            <p className='text-lg text-black'>Your Query is recieved. We will get back to you soon. 😊</p>
        </div>
    </div>
  )
}

export default Alert