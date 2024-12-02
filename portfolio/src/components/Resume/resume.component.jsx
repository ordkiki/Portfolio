import { useState } from "react"
import Navbar from "../navbar/Navbar"

function ResumeComponent() {

  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex justify-center items-center accueil h-[80vh]">
        <div className=" p-4 ">

          <div className="w-[25vw]">
            <div>
              <h3 className="text-[24px] my-4 font-semibold">Why hire Me ?</h3>
              <p className="text-[rgba(255,255,255,0.4)] text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, minus.</p>
            </div>
            <div>
          
            </div>
          </div>

        </div>
        {/* AnotherComponent */}
        <div className="w-[45vw] h-[45vh] border p-4 border-white">
          <div className="info">
              <p className="title font-semibold">title</p>
              <p className="description text-[rgba(255,255,255,0.4)] text-[14px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam facere quas porro ea natus ex excepturi corrupti suscipit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeComponent