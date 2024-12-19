
import Navbar from "../navbar/Navbar"
import image from "../../assets/image.png"
// import  cv  from "../../assets/pdf/CV_RAKOTOARINO_Onjaniaina_Rolland.pdf";
// import axios from "axios";
// import { FaReact, FaNodeJs } from "react-icons/fa6"
import { FaDownload, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6"
import Competence from "./Competence"
import { useEffect, useState } from "react";
import Loading from "../loader/spinner";

export const Homecomponent = () => {
  const [isload, setLoad] = useState(true)
  const pdf_CV_URL = 'http://localhost:5173/CV_RAKOTOARINO_Onjaniaina_Rolland.pdf';
  const DonwloadCV = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  
  }
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
      {/* <Loading></Loading> */}
      <div>
        <div className=" my-10 w-[100vw] p-6  flex flex-col-reverse lg:flex-row lg:flex  justify-around">

          <div className="w-[90vw] lg:w-[25vw] my-14">
            <h3 className="text-center lg:text-left">Developper Web & Mob</h3>

            <div className="lg:w-[25vw] w-[90vw]">
              <h1 className="text-center lg:text-left text-3xl my-4">
                Bonjour, appelle moi <br />
                <span className="text-green">Onjaniana Rolland</span>
              </h1>
            </div>

            <p className="my-5 text-wrap w-[90vw] lg:w-[25vw]">
              amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi quaerat cumque sit nemo esse soluta laboriosam tempora quia debitis nostrum?
            </p>

            <div className="w-[80vw] lg:w-[25vw] flex justify-between items-center">
              <div>
                <button
                  onClick={()=>{DonwloadCV(pdf_CV_URL)}} 
                  className="  flex  items-center text-[14px]  text-green border p-2 rounded-lg">
                    DOWNLOAD 
                    <FaDownload className="ml-5">
                    </FaDownload>
                </button>
              </div>
              <div className="social flex ">
                <FaTwitter className="text-2xl mx-1 social-item text-green"></FaTwitter>
                <FaFacebook className="text-2xl mx-1 social-item text-green"></FaFacebook>
                <FaLinkedin className="text-2xl mx-1 social-item text-green"></FaLinkedin>
              </div>
            </div>
          </div>
          <div className="-z-20  mx-5 relative flex justify-center w-[80vw] h-[40vh] lg:w-[30vw] my-10 items-center">
            {/* Cercle animé (arrière-plan) */}
            <div className="cercle w-[80vw] h-[80vw] sm:w-[30vw] sm:h-[30vw] lg:w-[20vw] lg:h-[20vw] 
      shadow-[var(--green)] shadow-md border-solid border-[3px] 
      border-t-[var(--green)] border-transparent absolute animate-spin 
      rounded-full z-0">
            </div>

            {/* Conteneur de l'image (premier plan) */}
            <div className=" object-cover w-[80vw] rounded-full overflow-hidden h-[80vw] sm:w-[30vw] sm:h-[30vw] lg:w-[20vw] lg:h-[20vw] z-10">
              <img src={image} alt="cercle" className="opacity-70 object-cover w-full h-full -z-20" />
            </div>
          </div>


        </div>

        <div className="items-center h-screen lg:h-fit  flex justify-center ">
          <div className="lg:flex block lg:justify-around  w-[95vw]">

            <Competence
              number=""
              titre=" years"
              titreSuite="of experience"
            />
            <Competence
              number="281"
              titre=" commit"
              titreSuite="in git"
            />
            <Competence
              number="3"
              titre=" project"
              titreSuite="done"
            />
          </div>

        </div>
      </div>
      {/* <FaNodeJs className="text-green-600"></FaNodeJs> */}
      {/* <FaReact className="text-blue-400"></FaReact> */}
    </div>
  )
}
