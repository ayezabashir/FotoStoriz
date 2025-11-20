import { useNavigate } from "react-router-dom"

const Header = () => {
  const nav = useNavigate();

  return (
    <header className="max-w-[1200px] mx-auto">
      <div className="mx-2 my-4 flex items-center justify-between">
        <div onClick={()=>nav("/")}>
          <h1 className="text-3xl font-stretch-110% font-extrabold tracking-wide cursor-pointer">FotoStoriz</h1>
        </div>
        <ul className="flex items-center justify-between gap-8">
          <li className="font-semibold tracking-widest text-black hover:underline underline-offset-2 transform transition-all delay-75 hover:-translate-y-1 cursor-pointer text-sm mx-1" onClick={()=>nav("/stories")}>STORIES</li>
          <li className="font-semibold tracking-widest text-black hover:underline underline-offset-2 transform transition-all delay-75 hover:-translate-y-1 cursor-pointer text-sm mx-1" onClick={()=>nav("/features")}>FEATURES</li>
          <li className="font-semibold tracking-widest text-black hover:underline underline-offset-2 transform transition-all delay-75 hover:-translate-y-1 cursor-pointer text-sm mx-1" onClick={()=>nav("/pricing")}>PRICING</li>
        </ul>
        <div>
          <button type="button" className="bg-black hover:bg-black/90 cursor-pointer font-light text-white text-base p-2 w-40" onClick={()=>nav("/pricing")}>GET AN INVITE</button>
        </div>
      </div>
    </header>
  )
}

export default Header