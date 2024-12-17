
import { FaReact, FaPhp, FaAngular, FaPython, FaJs, FaHtml5, FaCss3, FaC} from 'react-icons/fa6'
function Skills() {
    return (
        <div className='sm:p-0 p-4 w-[96vw] lg:w-[30vw]'>
            <p className='Skills font-bold text-[24px]'> Skills</p>
            <p className='text-[rgba(255,255,255,0.4)] my-4 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis sit odit mollitia nihil corrupti fugit officiis adipisci rerum quaerat!</p>
            <div className=' flex  flex-wrap text-wrap'>
                <div className='p-2'>
                    <FaReact className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-blue-500'></FaReact>
                </div>
                <div className='p-2'>
                    <FaPhp className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-violet-400'></FaPhp>
                </div>
                <div className='p-2'>
                    <FaAngular className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-red-600'></FaAngular>
                </div>
                <div className='p-2'>
                    <FaPython className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-blue-400'></FaPython>
                </div>
                <div className='p-2'>
                    <FaJs className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-yellow-400'></FaJs>
                </div>
                <div className='p-2'>
                    <FaHtml5 className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-orange-500'></FaHtml5>
                </div>
                <div className='p-2'>
                    <FaCss3 className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-blue-500'></FaCss3>
                </div>
                <div className='p-2'>
                    <FaC className='  bg-[rgba(255,255,255,0.1)] p-2 hover:scale-[1.2] transition-all hover:bg-[var(--green)] text-7xl text-blue-500'></FaC>
                </div>
            </div>
        </div>
    )
}

export default Skills