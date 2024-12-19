import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"
import Loading from "../loader/spinner";

function Work() {
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
    </div>
  )
}

export default Work