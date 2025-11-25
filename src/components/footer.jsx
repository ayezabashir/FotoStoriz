import React from 'react'
import HeaderMenuItems from './HeaderMenuItems'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const nav = useNavigate();
  return (
    <footer className='bg-black text-white'>
      <div className='w-full md:max-w-[900px] mx-auto py-8 px-4 flex justify-between'>
        <div className='flex gap-28'>
          <div>
            <h1 className="text-3xl font-stretch-110% font-extrabold tracking-wide cursor-pointer">FotoStoriz</h1>
            <div className='flex items-center justify-between gap-4'>
              <img src="facebook icon" alt="" />
            </div>
          </div>
          <div className='text-white'>
            <ul className="flex flex-col items-start justify-between gap-4">
              <li className="font-regular tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/")}>HOME</li>
              <li className="font-regular tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/stories")}>STORIES</li>
              <li className="font-regular tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/features")}>FEATURES</li>
              <li className="font-regular tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/pricing")}>PRICING</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer