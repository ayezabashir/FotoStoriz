import arrowlight from "/src/assets/right-arrow-white.svg";
import { useNavigate } from 'react-router-dom'
import Button from './Button';
import facebook_icon from "/src/assets/facebook.svg";
import twitter_icon from "/src/assets/twitter.svg";
import youtube_icon from "/src/assets/youtube.svg";
import insta_icon from "/src/assets/instagram.svg"

const Footer = () => {
  const nav = useNavigate();
  return (
    <footer className='bg-black text-white'>
      <div className='w-full md:max-w-[900px] mx-auto py-8 px-4 flex flex-col gap-14 md:flex-row justify-between'>
        <div className='flex flex-col md:flex-row gap-12 md:gap-28'>
          <div className="flex flex-col gap-4  md:justify-between items-center md:items-start">
            <h1 className="text-3xl font-stretch-110% font-extrabold tracking-wide cursor-pointer">FotoStoriz</h1>
            <div className='flex items-center md:justify-between gap-2'>
              <img className="w-6 cursor-pointer transition-transform delay-75 hover:scale-110" src={facebook_icon} alt="facebook" />
              <img className="w-6 cursor-pointer transition-transform delay-75 hover:scale-110" src={twitter_icon} alt="twitter" />
              <img className="w-6 cursor-pointer transition-transform delay-75 hover:scale-110" src={youtube_icon} alt="youtube" />
              <img className="w-6 cursor-pointer transition-transform delay-75 hover:scale-110" src={insta_icon} alt="instgram" />
            </div>
          </div>
            <ul className="flex flex-col items-center md:items-start justify-between gap-4">
              <li className="font-regular hover:underline underline-offset-4 tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/")}>HOME</li>
              <li className="font-regular hover:underline underline-offset-4 tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/stories")}>STORIES</li>
              <li className="font-regular hover:underline underline-offset-4 tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/features")}>FEATURES</li>
              <li className="font-regular hover:underline underline-offset-4 tracking-widest text-white cursor-pointer text-xs" onClick={() => nav("/pricing")}>PRICING</li>
            </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 md:justify-between">
          <Button variant="secondary" size="lg" className="flex justify-between items-center gap-5 w-[180px] group text-white" onClick={() => nav("/pricing")} >
            get an invite
            <img className="w-7 transition-transform duration-300 group-hover:translate-x-2" src={arrowlight} alt="right arrow icon" />
          </Button>
          <p className="text-xs">&copy; Copyright 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer