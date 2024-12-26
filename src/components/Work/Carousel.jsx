import { useState } from "react"
import image from '../../assets/image.png'
import image2 from '../../assets/react.svg'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Carousel() {
    const [Current, SetCurrent] = useState(0);
    const Items = [
        {
            "id" : 1,
            "image" : image,
            "Titre " : "Titre image",
        },
        {
            "id" : 2,
            "image" : image2,
            "Titre " : "Titre image2",
        }

    ]
    const NextCarousel = () => {
        SetCurrent(Current === Items.length - 1 ? 0 : Current + 1)
    }
    const PrevCarousel = () => {
        SetCurrent(Current === Items.length - 1 ? 0 : Current - 1)
    }
    return (
        <div className="w-[100vw] h-[90vh] p-4  flex justify-center items-center">
            <div >
                <h3 className="text-2xl my-4">Mes projets</h3>
                <div className="block lg:flex  flex-row justify-center items-center">
                    <div className="lg:w-[30vw] w-full my-4 ">
                        {Items.map((item, index) =>
                                    Current === index && (
                                        <div className="flex items-center justify-between lg:w-[28vw] w-full " key={index}>
                                            <h3   className="font-semibold text-9xl my-4"> {item.id} </h3>      
                                            <h3 className="text-xl font-semibold mx-4">   {item["Titre "]}</h3>
                                        </div>
                                    )
                        )}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem autem in temporibus excepturi beatae.</p>

                    </div>
                    <div className="border  flex justify-between items-center">
                        <BiLeftArrow onClick={PrevCarousel} className="text-2xl"/>
                        <div className="object-cover  w-full lg:w-[35vw] p-4 h-[50vh] justify-center items-center flex">
                            {
                                Items.map((item, index) =>
                                    Current === index && (
                                        <img src={item.image} key={index} alt="img" className=" h-[50vh] w-full"/>
                                    )
                                )
                            }

                        </div>
                        <BiRightArrow onClick={NextCarousel} className="text-2xl"/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Carousel