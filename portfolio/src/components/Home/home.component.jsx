import Navbar from "../navbar/Navbar"
// import { FaReact, FaNodeJs } from "react-icons/fa6"
import { FaDownload, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6"
import Competence from "./Competence"
export const Homecomponent = () => {

  return (
    <div>
      <Navbar></Navbar>
      {/* <Loading></Loading> */}
      <div>
        <div className=" my-10 w-[100vw] p-6 flex flex-col-reverse lg:flex-row lg:flex  justify-around">

          <div className="w-[90vw] lg:w-[25vw]">
            <h3 className="text-center lg:text-left">Software Developper</h3>

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

            <div className="w-[90vw] lg:w-[25vw] flex items-center justify-between">
              <div>
                <button className="  flex  items-center  text-green border-green">DOWNLOAD CV <FaDownload className="ml-5"></FaDownload></button>
              </div>
              <div className="social flex items-center justify-between w-[40vw]">
                <FaTwitter className="text-2xl mx-2 social-item text-green"></FaTwitter>
                <FaFacebook className="text-2xl mx-2 social-item text-green"></FaFacebook>
                <FaLinkedin className="text-2xl mx-2 social-item text-green"></FaLinkedin>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[90vw] lg:w-[30vw] my-10 items-center">
            <div className=" cercle size-[40vh] bg-green rounded-[50%]">
            </div>
          </div>
        </div>

        <div className="items-center h-screen lg:h-fit  flex justify-center ">
          <div className="lg:flex block lg:justify-around  w-[95vw]">

            <Competence
              number="12"
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
