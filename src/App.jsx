import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import CaseStudies from "./pages/CaseStudies"
import Business from "./pages/Business"
import Financial from "./pages/Financial"
import Digital from "./pages/Digital"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/casestudies" element={<CaseStudies/>}/>
          <Route path="/contact" element={<Contact/>}/>
         
          <Route path="/business" element={<Business/>}/>
          <Route path="/financial" element={<Financial/>}/>
          <Route path="/digital" element={<Digital/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
