import { useNavigate } from "react-router-dom"
import menu from "/src/assets/menu.svg";
import Button from "./Button";
import HeaderMenuItems from "./HeaderMenuItems";
import { useState } from "react";

const Header = () => {
  const [showMenuItems, setShowMenuItems]= useState(false);
  const nav = useNavigate();

  const handleMenuItems = ()=>{
    setShowMenuItems(!showMenuItems);
  }

  return (
    <header className="max-w-[1200px] mx-auto">
      <div className="mx-7 my-4 flex items-center justify-between">
        <div onClick={() => nav("/")}>
          <h1 className="text-3xl font-stretch-110% font-extrabold tracking-wide cursor-pointer">FotoStoriz</h1>
        </div>
        <div className="block md:hidden relative">
          <Button variant="secondary" onClick={handleMenuItems} >
            <img className="w-7" src={menu} alt="" />
          </Button>
          {
            showMenuItems && <div className="absolute right-0 bg-black/90 p-4 z-10">
            <div className="flex flex-col items-end">
              <HeaderMenuItems setShowMenuItems={setShowMenuItems} />
            </div>
          </div>
          }
        </div>
        <div className="hidden md:flex items-center justify-between gap-8">
          <HeaderMenuItems />
        </div>
      </div>
    </header>
  )
}

export default Header