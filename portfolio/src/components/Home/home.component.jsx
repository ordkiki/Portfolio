import Navbar from "../navbar/Navbar"
import image from "../../assets/image.png"
// import { FaReact, FaNodeJs } from "react-icons/fa6"
import { FaDownload, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6"
import Competence from "./Competence"
export const Homecomponent = () => {

  return (
    <div>
      <Navbar></Navbar>
      {/* <Loading></Loading> */}
      <div>
        <div className=" my-10 w-[100vw] p-6  flex flex-col-reverse lg:flex-row lg:flex  justify-around">

          <div className="w-[90vw] lg:w-[25vw] my-14">
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

            <div className="w-[90vw] lg:w-[25vw] flex justify-between items-center">
              <div>
                <button className="  flex  items-center text-[14px]  text-green border p-2 rounded-lg">DOWNLOAD <FaDownload className="ml-5"></FaDownload></button>
              </div>
              <div className="social flex ">
                <FaTwitter className="text-2xl mx-1 social-item text-green"></FaTwitter>
                <FaFacebook className="text-2xl mx-1 social-item text-green"></FaFacebook>
                <FaLinkedin className="text-2xl mx-1 social-item text-green"></FaLinkedin>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center w-[90vw]  h-[40vh] lg:w-[30vw] my-10 items-center">
            <div className="object-cover w-[50vh] rounded-full overflow-hidden h-[50vh]">
              <img src={image} alt="" className=" object-cover w-[50vw] h-[50vh]"/>
            </div>
            <div className=" cercle w-[50vh] shadow-[var(--green)] shadow-md h-[50vh] border-solid border-[3px] border-t-[var(--green)] border-transparent absolute animate-spin rounded-full">
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
