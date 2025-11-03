import innerimag from "../../assets/innerimg.png"
import { GoHome } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const InnerSlider = () => {
    return (
        <>
            <div className='relative bg-secondary  ml-[32px] w-[186px] h-[954px] rounded-[20px]'>
                <div className='flex justify-center pt-[38px]'>
                    <img src={innerimag} alt="" />
                </div>
                <div className='relative'>

                    <div className='text-white relative mt-[78px]'>
                        
                        <div className='absolute right-0 left-[25px] pt-[25px] pb-[25px] pl-[45px] pr-[70px] bg-gray-200 rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white after:absolute after:content-[""] after:w-[8px] after:bg-[#1E1E1E] after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000] group'>
                            <GoHome className='text-5xl text-secondary group-hover:text-secondary'/>
                        </div>

                         <div className='absolute right-0 left-[25px] top-[110px] pt-[25px] pb-[25px] pl-[45px] pr-[70px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white group after:absolute after:content-[""] after:w-[8px] after:bg-secondary after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000]'>
                          <LuMessageCircleMore className='text-5xl text-[#C3C3C3] group-hover:text-secondary '/> 
                         </div>

                         <div className='absolute right-0 top-[220px] left-[25px] pt-[25px] pb-[25px] pl-[45px] pr-[70px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white group after:absolute after:content-[""] after:w-[8px] after:bg-secondary after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000]'>
                           <IoSettingsOutline className='text-5xl text-[#C3C3C3] group-hover:text-secondary'/>
                         </div>   
                         
                    </div>
                    
                </div>
                 <div className='absolute right-0 bottom-[47px] left-[25px] pt-[25px] pb-[25px] pl-[45px] pr-[70px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white group after:absolute after:content-[""] after:w-[8px] after:bg-secondary after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000]'>
                            <ImExit className='text-white text-5xl group-hover:text-secondary'/>

                          </div>
            </div>
        </>


    )
}

export default InnerSlider