import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6"
import Navbar from "../navbar/Navbar"
import { useEffect, useState } from "react"
import Loading from "../loader/spinner";
import axios from "axios";

function Contactcomponent() {

  const [FormData, setFormData ] = useState([]);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    })
  }
  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(FormData);
      
      await axios.post("http://localhost/API-Portfolio/Visiteur/Add",
        FormData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
    } catch (error) {
      console.log(error);
      
    }
    alert("Votre message est envoyé avec succes");
    
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
      <div className="p-10 lg:flex block justify-around items-center h-[90vh] ">
        <div className="bg-[rgba(240,254,245,0.1)] rounded-md p-4 w-[90vw] lg:w-[32vw] h-fit">
          <h3 className="text-green cursor-pointer hover:scale-[1.2] transition-all font-semibold text-[24px]">Let s work together</h3>
          <p className="text-[rgba(240,254,245,0.5)] my-4 text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero excepturi nesciunt voluptas ad, neque atque.</p>
          <form  onSubmit={handlSubmit} action="" method="POST" className="">
            
              <div className="block lg:flex my-4 justify-around w-[100%]">
                <input 
                  onChange={handleChange} 
                  name="Name" 
                  className=" px-1 rounded-lg bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[4px] lg:m-0 my-2 " 
                  placeholder="Name" type="Name" />
                <input 
                  onChange={handleChange} 
                  name="LastName" 
                  className=" px-1 rounded-lg bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[4px] lg:m-0  my-2" placeholder="Last name" type="Last name" />
              </div>

              <div className="block lg:flex my-2 justify-around w-[100%]">
                <input 
                  onChange={handleChange} 
                  name="Email" 
                  className=" px-1 rounded-lg bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[4px] lg:m-0  my-2" 
                  placeholder="Email adress" type="email" />
                <input 
                  onChange={handleChange} 
                  name="Telephone" 
                  className=" px-1 rounded-lg bg-[rgba(0,0,0,0.4)] lg:w-[47%] w-[83vw] outline-none p-[4px] lg:m-0  my-2" 
                  placeholder="Phone number" type="number" />
              </div>
              <div className="my-4 flex justify-around w-[100%]">
                <input 
                  onChange={handleChange} 
                  name="Country" 
                  className=" px-1 rounded-lg bg-[rgba(0,0,0,0.4)] lg:w-[96%] w-[83vw] outline-none p-[4px]" 
                  placeholder="select country" type="name" />
              </div>

              <div className="my-4 flex justify-center w-[100%]">
                <textarea 
                  onChange={handleChange}
                  className=" bg-[rgba(0,0,0,0.4)]  w-[98%] outline-none p-[10px] h-[27vh]" 
                  placeholder="Message" type="text" />
              </div>
              <div className="px-4">
                <button 
                  type="submit"
                  name="Envoyer"
                  onClick={handlSubmit}
                  className="bg-[var(--green)] p-1 text-black rounded-lg">Envoyer</button>
              </div>
          </form>
        </div>
      
        <div className="contact">
          <div className="my-4 items-center flex ">
            <FaPhone className="text-green cursor-pointer hover:scale-[1.2] transition-all text-5xl mx-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-2"></FaPhone>
            <div className="Location">
              <p className="text-[rgba(240,254,245,0.5)]">Phone</p>
              <p>(+261) 38 13 004 00</p>
            </div>
          </div>
          <div className="my-4 items-center flex ">
            <FaMessage className="text-green cursor-pointer hover:scale-[1.2] transition-all text-5xl mx-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-2"></FaMessage>
            <div className="Location">
              <p className="text-[rgba(240,254,245,0.5)]">Email</p>
              <p>onjaniaina235497@gmail.com</p>
            </div>
          </div>
          <div className="my-4 items-center flex ">
            <FaLocationDot className="text-green cursor-pointer hover:scale-[1.2] transition-all text-5xl mx-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-2"></FaLocationDot>
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