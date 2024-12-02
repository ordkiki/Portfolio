import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Homecomponent } from "./components/Home/home.component"
import ServiceComponent from "./components/service/service.component"
import Contactcomponent from "./components/contact/contact.component"
import ResumeComponent from "./components/Resume/resume.component"
import Loading from "./components/loader/spinner"
import { useEffect, useState } from "react"

export default function App() {
  const [isload, setLoad] = useState(true)
  useEffect(() => {
    const LoadData = () => {
      setTimeout(() => {
        setLoad(false);
        
      }, 1000);
    };

    LoadData();
  }, []);

  return isload ? 
    (<Loading/>)
    : (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homecomponent />} />
        <Route path="/Service" element={<ServiceComponent />} />
        <Route path="/Service" element={<ServiceComponent />} />
        <Route path="/Contact" element={<Contactcomponent />} />
        <Route path="/Resume" element={<ResumeComponent />} />
      </Routes>
    </BrowserRouter>
  )
}