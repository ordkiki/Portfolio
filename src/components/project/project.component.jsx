import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"
import Loading from "../loader/spinner";
import WorkComponent from "../Work/WorkComponent";
import axios from "axios";
import { header } from "framer-motion/client";

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
        <div>
          <WorkComponent/>
        </div>
    </div>
  )
}

export default Work