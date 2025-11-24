import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Stories from "./pages/Stories"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import Header from "./components/Header"
import Story from "./pages/Story"

function App(){
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/features" element={<Features/>} />
          <Route path="/stories" element={<Stories/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/story/:author" element={<Story/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App