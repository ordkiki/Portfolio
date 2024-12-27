import { useState } from "react"
import Ecole_manager from '../../assets/Projet/Ecole_manager.png'
import portfolio from '../../assets/Projet/portfolio.png'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Carousel() {
    const [Current, SetCurrent] = useState(0);
    const Items = [
        {
            "id": "01",
            "image": portfolio,
            "Titre ": "Portfolio",
            "Techno" : "REACTJS, PHP",
            "link ": "/ordkiki.vercel.app",
        },
        {
            "id": "02",
            "image": Ecole_manager,
            "Titre ": "/Ecole_manager",
            "link ": "/Ecole_manager.vercel.app",
            // "link ": "/ordkiki.vercel.app",
            "Techno" : "REACTJS, PHP",
        }

    ]
    const NextCarousel = () => {
        SetCurrent(Current === Items.length - 1 ? 0 : Current + 1)
    }
    const PrevCarousel = () => {
        SetCurrent(Current === 0 ? Items.length - 1 : Current - 1)
    }
    return (
        <div className="w-[100vw] h-[80vh] p-4  flex justify-center items-center">
            <div >
                <h3 className="text-2xl my-4">Mes projets</h3>
                <div className="block lg:flex flex-row-reverse   justify-center items-center">

                    <div className="   w-[90vw] lg:w-[40vw]">
                        <div className="object-cover  w-full lg:w-[42vw] p-4 h-[50vh] justify-center items-center flex">

                            {
                                
                                Items.map((item, index) =>
                                    Current === index && (
                                        <div className="" key={index}>
                                            <h3 className="text-xl font-semibold my-4">   {item["Titre "]}</h3>
                                            <div>
                                                <img src={item.image}  alt="img" className="cursor-pointer object-cover bg-white p-1 sm:h-[20vh] lg:h-[40vh] w-full" />
                                            </div>
                                        </div>
                                    )
                                )
                            }

                        </div>
                        <div className=" mx-4 items-right flex w-[5vw] justify-between">
                            <BiLeftArrow onClick={PrevCarousel} className="text-3xl text-black bg-[var(--green)] p-2 rounded cursor-pointer hover:scale-[1.2] transition " />
                            <BiRightArrow onClick={NextCarousel} className="text-3xl text-black bg-[var(--green)] p-2 rounded cursor-pointer hover:scale-[1.2] transition" />

                        </div>
                    </div>

                    <div className="lg:w-[30vw] w-full my-4 ">
                        {Items.map((item, index) =>
                            Current === index && (
                                <div className=" items-center justify-between lg:w-[30vw] w-full " key={index}>
                                    <h3 className="font-semibold text-7xl my-4"> {item.id} </h3>
                                    
                                </div>
                            )
                        )}
                        <p className="w-full lg:w-[30vw] text-[15px]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt et dolorem praesentium, 
                            quisquam illo necessitatibus optio odio ad illum distinctio velit voluptatum voluptates, 
                            ipsum hic ratione dicta adipisci natus dolor!
                            quisquam illo necessitatibus optio odio ad illum distinctio velit voluptatum voluptates, 
                            ipsum hic ratione dicta adipisci natus dolor!
                            quisquam illo necessitatibus optio odio ad illum distinctio velit voluptatum voluptates, 
                            ipsum hic ratione dicta adipisci natus dolor!
                        </p>
                        <button className="transition  hover:text-[var(--green)]  border-[1px] hover:bg-transparent hover:border-[var(--green)] border-[var(--green)] p-2 my-2 rounded-md bg-[var(--green)] text-black">
                            View page
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Carousel