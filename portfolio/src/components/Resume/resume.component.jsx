import { useState } from "react"
import Navbar from "../navbar/Navbar"
import Education from "./education";
import Experience from "./expercience";
import About from "./about";
import Skills from "./skills";

function ResumeComponent() {
  const [Info, SetInfo] = useState("Education");
  const Show =(e)=>{
    e.preventDefault();
    SetInfo(e.target.name);
    console.log(Info);
    
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex justify-around p-10 items-center accueil h-[80vh]">
        <div className=" p-4 ">

          <div className="w-[25vw]">
            <div>
              <h3 className="text-[24px] my-4 font-semibold">Why hire Me ?</h3>
              <p className="text-[rgba(255,255,255,0.4)] text-[14px] my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, minus.</p>
            </div>
            <div>
              <button onClick={Show} onChange={(e)=>Show(e)} name="Education" className="my-2 bg-green text-[rgba(0,0,0,0.8)] font-semibold text-2xl flex justify-center items-center  w-[24vw]">
                Education
              </button>
              <button onClick={Show} name="Experience" className="my-2 bg-green text-[rgba(0,0,0,0.8)] font-semibold text-2xl flex justify-center items-center  w-[24vw]">
                Experience
              </button>
              <button onClick={Show} name="Skills" className="my-2 bg-green text-[rgba(0,0,0,0.8)] font-semibold text-2xl flex justify-center items-center  w-[24vw]">
                Skills
              </button>
              <button onClick={Show} name="About" className="my-2 bg-green text-[rgba(0,0,0,0.8)] font-semibold text-2xl flex justify-center items-center  w-[24vw]">
                About me
              </button>
            </div>
          </div>

        </div>
        {/* AnotherComponent */}
        <div className="w-[30vw]">
          {(Info == "Expercience" )?<Experience/> : "" }
          {(Info == "Education" )?<Education/> : "" }
          {(Info == "Skills" )?<Skills/> : "" }
          {(Info == "About" )?<About/> : "" }

        </div>
      </div>
    </div>
  )
}

export default ResumeComponent