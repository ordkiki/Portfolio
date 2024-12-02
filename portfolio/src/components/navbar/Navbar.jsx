import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { Link } from "react-router-dom"
function Navbar() {
  const [openBar, setOpen] = useState(false);
  const ToogleClick = () => {
    setOpen(!openBar);
  }
  return (
    <div className="py-4 z-1 overflow-hidden flex items-center w-[100vw] justify-between lg:justify-around">
      <div>
        <h3 className="font-bold text-white text-xl px-4">Jakama <span className="text-green font-bold text-3xl">.</span> </h3>
      </div>

      {/*desktop device */}
      <ul className=" Navbar hidden justify-around  items-center lg:flex w-[40vw]">
        <li>
          <Link to='/' className="link-style">Home</Link>
        </li>
        <li>
          <Link to="/Service" className="link-style">Service</Link>
        </li>
        <li>
          <Link to="/Resume" className="link-style">Resume</Link>
        </li>
        <li>
          <Link to="/Work" className="link-style">Work</Link>
        </li>

        <li>
          <Link to="/Contact" className="text-black bg-green px-4 p-1 rounded-[20px]">Hire Me</Link>
        </li>
      </ul>

      {/* phone */}
      <button
        onClick={ToogleClick}
        className="lg:hidden -mx-4  text-white text-xl px-8 ">
        <FaBars></FaBars>
      </button>

      
      <div className={(openBar == true ? "flex  justify-center bg-[rgba(0,0,0,0.7)] items-center w-screen h-screen backdrop-blur-sm transition-all fixed top-0 right-0 ":"transition-all absolute top-0 right-0 w-0 h-screen")}>
        <ul className={(openBar == true ? "block text-3xl p-4":"hidden")}>
          <li
            onClick={ToogleClick}
            className="absolute top-2 font-bold text-4xl right-4">
            <span>&times;</span>
          </li>
          <li className="m-4">
            <Link to='/' className=" link-style">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/Service" className=" link-style">Service</Link>
          </li>
          <li className="m-4">
            <Link to="/Resume" className=" link-style">Resume</Link>
          </li>
          <li className="m-4">
            <Link to="/Work" className=" link-style">Work</Link>
          </li>

          <li className="m-4">
            <Link to="/Contact" className=" text-black bg-green px-4 p-1 rounded-[20px]">Hire Me</Link>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar