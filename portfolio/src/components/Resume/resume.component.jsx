import { useState } from "react"
import Navbar from "../navbar/Navbar"

function ResumeComponent() {
  const  Info = [
    {
      education : "",
      tech : "",
      project : "",
    }
  ]
  const [qualite,SetQualite] = useState([])
  const Choose =(data)=>{

  }


  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className=" p-4 w-screen flex justify-center items-center accueil">
          <div>
            <div>
              <h3 className="text-[24px] my-4 font-bold">Why hire Me</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, minus.</p>
            </div>
            <div>
              <div>

              </div>
            </div>
          </div>
        </div>
        {/* AnotherComponent */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default ResumeComponent