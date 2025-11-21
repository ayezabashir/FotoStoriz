import { useNavigate } from "react-router-dom"
import HeaderMenuItems from "./HeaderMenuItems";

const Header = () => {
  const nav = useNavigate();

  return (
    <header className="max-w-[1200px] mx-auto">
      <div className="mx-7 my-4 flex items-center justify-between">
        <div onClick={() => nav("/")}>
          <h1 className="text-3xl font-stretch-110% font-extrabold tracking-wide cursor-pointer">FotoStoriz</h1>
        </div>
        <HeaderMenuItems />
      </div>
    </header>
  )
}

export default Header