import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6"
import Navbar from "../navbar/Navbar"
function Contactcomponent() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-6 lg:flex block justify-around items-center h-[90vh]">
        <div className="bg-[rgba(240,254,245,0.1)] rounded-md p-4 w-[90vw] lg:w-[32vw] h-[70vh]">
          <h3 className="text-green font-semibold text-[24px]">Let's work together</h3>
          <p className="text-[rgba(240,254,245,0.5)] my-4 text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero excepturi nesciunt voluptas ad, neque atque.</p>
          <form action="" method="get">
            
              <div className="block lg:flex my-4 justify-around w-[100%]">
                <input className=" bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[2px] lg:m-0 my-2 " placeholder="First name" type="Firstname" />
                <input className=" bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[2px] lg:m-0  my-2" placeholder="Last name" type="Last name" />
              </div>
              <div className="block lg:flex my-2 justify-around w-[100%]">
                <input className=" bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[2px] lg:m-0  my-2" placeholder="Email adress" type="email" />
                <input className=" bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[2px] lg:m-0  my-2" placeholder="Phone number" type="number" />
              </div>
              <div className="my-4 flex justify-around w-[100%]">
                <input className=" bg-[rgba(0,0,0,0.4)] lg:w-[96%] w-[83vw] outline-none p-[2px]" placeholder="select country" type="Firstname" />
              </div>

              <div className="my-4 flex justify-center w-[100%]">
                <textarea className=" bg-[rgba(0,0,0,0.4)]  w-[98%] outline-none p-[10px] h-[27vh]" placeholder="Message" type="text" />
              </div>
          </form>
        </div>
      
        <div className="contact">
          <div className="my-4 items-center flex ">
            <FaPhone className="text-green text-5xl mx-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-2"></FaPhone>
            <div className="Location">
              <p className="text-[rgba(240,254,245,0.5)]">Phone</p>
              <p>(+261) 38 13 004 00</p>
            </div>
          </div>
          <div className="my-4 items-center flex ">
            <FaMessage className="text-green text-5xl mx-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-2"></FaMessage>
            <div className="Location">
              <p className="text-[rgba(240,254,245,0.5)]">Email</p>
              <p>onjaniaina235497@gmail.com</p>
            </div>
          </div>
          <div className="my-4 items-center flex ">
            <FaLocationDot className="text-green text-5xl mx-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-2"></FaLocationDot>
            <div className="Location">
              <p className="text-[rgba(240,254,245,0.5)]">Location</p>
              <p>Tana 101 Antananarivo</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contactcomponent