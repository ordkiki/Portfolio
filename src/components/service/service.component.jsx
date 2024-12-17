import Navbar from "../navbar/Navbar"
import { BsArrowDownRight } from "react-icons/bs"
function Service(props) {
  return (
    <div className="hover:text-[var(--green)] transition-colors text-[rgba(255,255,255,0.7)] w-[80vw] lg:w-[35vw] p-2">
      <div className="flex items-center justify-between w-[80vw] lg:w-[35vw]">
        <h3 className="font-thin text-5xl w-fit">{props.num}</h3>
        <BsArrowDownRight className="hover:transition-all  hover:-rotate-45 bg-white text-black p-2 text-3xl rounded-full"></BsArrowDownRight>
      </div>
      <div>
        <h3 className="text-[24px] font-semibold my-5">{props.title}</h3>
      </div>
      <div>
        <p className="text-[12px] font-thin  my-5">{props.description}</p>
      </div>
      <div><hr /></div>
    </div>
  )
}

function ServiceComponent() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-screen flex justify-center items-center lg:h-[80vh] h-full">
        <div className="block lg:flex flex-wrap justify-around w-[80vw]">
          <Service 
            num = "01"
            title = "web developpement"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat doloremque saepe deleniti similique quae "
          />
          <Service 
            num = "02"
            title = "UI / UX"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat doloremque saepe deleniti similique quae "
          />
          <Service 
            num = "03"
            title = "App Mobile"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat doloremque saepe deleniti similique quae "
          />
          <Service 
            num = "01"
            title = "web developpement"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat doloremque saepe deleniti similique quae "
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceComponent