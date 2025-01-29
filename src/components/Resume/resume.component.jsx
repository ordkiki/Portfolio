import { useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
import Education from "./education";
import Experience from "./expercience";
import About from "./about";
import Skills from "./skills";
import Loading from "../loader/spinner";

function ResumeComponent() {
  const [Info, SetInfo] = useState("Education");
  const Show =(e)=>{
    e.preventDefault();
    SetInfo(e.target.name);   
  }

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
    <div>
      <Navbar></Navbar>
      <div className="block lg:flex justify-around  lg:p-10 items-center accueil h-fit lg:h-[70vh]">
        <div className="p-4 lg:p-10 w-[90vw] lg:w-[30vw] ">

          <div className="my-20 w-[90vw] lg:w-[25vw]">
            <div className="my-10">
              <h3 className="text-[32px]  lg:w-fit sm:w-[96vw] text-center my-10 font-semibold">Pourquoi moi ?</h3>
              <p className="text-[rgba(255,255,255,0.4)] text-[14px] my-4 lg:text-left   text-center">
                Je suis passionné de l' informatique et je j'ai une forte motivation pour ameliorer mon carrière sur le developpement web
              </p>
            </div>
            <div className="my-10">
              <button onClick={Show} onChange={(e)=>Show(e)} name="Education" className="outline-none my-2 bg-[rgba(250,250,250,0.1)]  font-normal text-xl p-1 hover:bg-[var(--green)] hover:text-black transition-all flex justify-center items-center   w-[90vw] lg:w-[24vw]">
                Education
              </button>
              <button onClick={Show} name="Experience" className="outline-none my-2 bg-[rgba(250,250,250,0.1)]  font-normal text-xl p-1 hover:bg-[var(--green)] hover:text-black transition-all flex justify-center items-center   w-[90vw] lg:w-[24vw]">
                Experience
              </button>
              <button onClick={Show} name="Skills" className="outline-none my-2 bg-[rgba(250,250,250,0.1)]  font-normal text-xl p-1 hover:bg-[var(--green)] hover:text-black transition-all flex justify-center items-center   w-[90vw] lg:w-[24vw]">
                Compétence
              </button>
              <button onClick={Show} name="About" className="outline-none my-2 bg-[rgba(250,250,250,0.1)]  font-normal text-xl p-1 hover:bg-[var(--green)] hover:text-black transition-all flex justify-center items-center   w-[90vw] lg:w-[24vw]">
                Apropos
              </button>
            </div>
          </div>

        </div>
        {/* AnotherComponent */}
        <div className="w-screen lg:w-[35vw]">
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