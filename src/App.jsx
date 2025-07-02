import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CaseStudies from "./pages/CaseStudies"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/casestudies" element={<CaseStudies/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
