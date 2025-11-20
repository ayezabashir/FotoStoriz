import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Stories from "./pages/Stories"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/features" element={<Features/>} />
          <Route path="/stories" element={<Stories/>} />
          <Routes path="/pricing" element={<Pricing/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App