import { useState } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from "axios";
import Miuzik from '../../assets/Projet/Miuzik.png'
import Ecole_manager from '../../assets/Projet/Ecole_manager.png'
import portfolio from '../../assets/Projet/portfolio.png'
function Carousel() {
    const [Current, SetCurrent] = useState(0);
    const [ItemProject, SetItemsProjects] = useState();
    const LoadItem = async () => {
        try {
            const response = await axios.get("",
                header("Allow-ahead-JSON")
            )
            SetItemsProjects(response.data)
            console.log(response.data);
        }
        catch (error) {
            console.log("error lors de la recuperation de donnees");

        }

    }
    const Items = [
        {
            "id": "01",
            "image": portfolio,
            "Titre ": "Portfolio",
            "Techno": "REACTJS, PHP",
            "link ": "/ordkiki.vercel.app",
        },
        {
            "id": "02",
            "image": Ecole_manager,
            "Titre ": "Ecole_manager",
            "link ": "/Ecole_manager.vercel.app",
            // "link ": "/ordkiki.vercel.app",
            "Techno": "REACTJS, PHP",
        },
        {
            "id": "03",
            "image": Miuzik,
            "Titre ": "Miuzik",
            "link ": "/Miuzik.vercel.app",
            // "link ": "/ordkiki.vercel.app",
            "Techno": "REACTJS, PHP",
        }

    ]
    const NextCarousel = () => {
        SetCurrent(Current === Items.length - 1 ? 0 : Current + 1)
    }
    const PrevCarousel = () => {
        SetCurrent(Current === 0 ? Items.length - 1 : Current - 1)
    }
    return (
        <div className="w-screen  items-center flex justify-center">
            <div className="lg:w-[75vw] w-[90vw]">
                <h3 className="text-2xl my-8">Mes projets</h3>
                <div className="block lg:flex flex-row-reverse    justify-between lg:w-[75vw] w-[90vw] items-center">

                    <div className="   w-[90vw] lg:w-[35vw] ">
                        <div className="object-cover  w-[90vw]  lg:w-[35vw]  h-[50vh] justify-center items-center ">

                            {

                                Items.map((item, index) =>
                                    Current === index && (
                                        <div className=" p-1" key={index}>
                                            <h3 className="text-xl font-semibold mb-4">   {item["Titre "]}</h3>
                                            <div className="">
                                                <img
                                                    type="image/png"
                                                    src={item.image} alt="img"
                                                    className="border rounded-xl cursor-pointer object-cover  p-1 h-[20vh] lg:h-[40vh] w-[95vw] lg:w-[35vw]" />
                                            </div>
                                        </div>
                                    )
                                )
                            }
                            <div className="  items-right flex lg:w-[5vw]  justify-between ">
                                <button
                                className="outline-none"
                                    onClick={PrevCarousel}
                                >
                                    <BiLeftArrow
                                        className="lg:w-[2vw]   text-3xl text-black bg-[var(--green)] lg:p-2 p-0 rounded cursor-pointer hover:scale-[1.1] transition " />

                                </button>
                                <button
                                className="outline-none">
                                    <BiRightArrow
                                        onClick={NextCarousel}
                                        className="lg:w-[2vw] outline-none  text-3xl text-black bg-[var(--green)] lg:p-2 p-0 rounded cursor-pointer hover:scale-[1.1] transition" />

                                </button>

                            </div>

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