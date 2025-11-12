import { BsThreeDotsVertical } from "react-icons/bs";
import request3 from "../../../assets/friendrequest3.png"


const Friends = () => {

  return (
    <div>
          <div className='py-2 px-5 md:px-[22px] rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/25 h-[451px] overflow-y-scroll'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Friends</h2>
                    <BsThreeDotsVertical  className='md:text-2xl'/>
                </div>
               <div className=''> 
                          <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[5px]'>
                    <div className='flex justify-between items-center space-x-[14px]'>
                        <img src={request3} alt="" className="size-12 md:size-auto"/>
                        <div className='flex flex-col'>
                            <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>Kaisar</h2>
                            <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Say something...</h3>
                        </div>
                    </div>
                    <div>
                      <p className='font-third font-medium text-[8px] md:text-[10px] text-secondary/50'>Start Chating</p>
                    </div>
                </div>
               </div>
            </div>
    </div>
  )
}

export default Friends