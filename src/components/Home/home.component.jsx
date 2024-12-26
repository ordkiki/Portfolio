import Navbar from "../navbar/Navbar"
import image from "../../assets/image.png"
import { FaDownload, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6"
import Competence from "./Competence"
import { useEffect, useState } from "react";
import Loading from "../loader/spinner";
import CV_URL from "../../assets/pdf/CV_RAKOTOARINO_Onjaniaina_Rolland.pdf"



export const Homecomponent = () => {
  const competences = [
    { number: "3ans", titre: "expercience", titreSuite: "Academique" },
    { number: "281", titre: " commit", titreSuite: "in git" },
    { number: "3", titre: " project", titreSuite: "done" },
  ];
  const [isload, setLoad] = useState(true)
  const pdf_CV_URL = CV_URL;
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
    (<Loading />)
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
                Étudiant en 3e année dans le
                domaine informatique passionné
                par la conception d applications
                intuitives et performantes. Je
                recherche un stage pour
                appliquer mes compétences en
                React.js, Python, et Kivy, tout en
                contribuant activement à des
                projets ambitieux
              </p>

              <div className="w-[80vw] lg:w-[25vw] flex justify-between items-center">
                <div>
                  <button
                    onClick={() => { DonwloadCV(pdf_CV_URL) }}
                    className="  flex  items-center text-[14px]  text-green border p-2 rounded-lg">
                    Mon CV
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
            <div className="lg:flex block lg:justify-around w-[95vw]">
              {competences.map((comp, index) => (
                <Competence
                  key={index}
                  number={comp.number}
                  titreSuite={comp.titreSuite}
                  titre={comp.titre}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    )
}
