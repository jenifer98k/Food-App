import { Routes, Route } from "react-router-dom"
import Home from "./bars/Home"
import Body from "./bars/Body"
import OurServices from "./NavbarItems/Ourservice"
import Navbar from "./bars/Navbar"
import Footer from "./bars/Footer"
import VarietyFoods from "./NavbarItems/VarietyFoods"
import Contact from "./NavbarItems/Contact"
import AboutUs from "./NavbarItems/AboutUs"
import Login from "./NavbarItems/Login"
import Dosa from "./bars/Dosa"
import Rice from "./bars/Rice"
import SouthIndian from "./bars/SouthIndian"
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />  
        <Route path="/" element={ <Body/> } />  
        <Route path="/service" element={ <OurServices/>} />  
        <Route path="/variety" element={ <VarietyFoods/>} /> 
        <Route path="/contact" element={ <Contact/>} /> 
        <Route path="/about" element={ <AboutUs/>} /> 
        <Route path="/login" element={ <Login/>} /> 
        <Route path="/dosa" element={ <Dosa/>} /> 
        <Route path="/rice" element={ <Rice/>} /> 
        <Route path="/south" element={ <SouthIndian/>} />  
      </Routes>
      <Footer/>
    </div>
  )
}

export default App