import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import request1 from "../../../assets/friendrequest1.png"
import request2 from "../../../assets/friendrequest2.png"
import request3 from "../../../assets/friendrequest3.png"
import request5 from "../../../assets/friendrequest5.png"

const Friends = () => {
  return (
    <div>
          <div className='py-2 px-5 md:px-[22px] rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/25'>
                {/* heading */}
                <div className='flex justify-between items-center'>
                    <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Friends</h2>
                    <BsThreeDotsVertical  className='md:text-2xl'/>
                </div>
        
               <div className=''> 
                 <div className='flex justify-between items-center mt-[10px] md:mt-[18px] border-b-2 border-bg-black/50 pb-3 px-[5px]'>
                    <div className='flex justify-between items-center space-x-[14px]'>
                        <img src={request1} alt="" className="size-12 md:size-auto"/>
                        <div className='flex flex-col'>
                            <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>Raghav</h2>
                            <h3 className='font-third font-medium text-[10px] md:text-[12px] text-[#4D4D4D]/75'>How are you?</h3>
                        </div>
                    </div>
                    <div>
                      <p className='font-third font-medium text-[8px] md:text-[10px] text-secondary/50'>Today, 8:56pm</p>
                    </div>
                </div>
                 <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[5px]'>
                    <div className='flex justify-between items-center space-x-[14px]'>
                        <img src={request2} alt="" className="size-12 md:size-auto"/>
                        <div className='flex flex-col'>
                            <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>Swathi</h2>
                            <h3 className='font-third font-medium text-[10px] md:text-[12px] text-[#4D4D4D]/75'>Dinner?</h3>
                        </div>
                    </div>
                    <div>
                      <p className='font-third font-medium text-[8px] md:text-[10px] text-secondary/50'>Today, 8:56pm</p>
                    </div>
                </div>
                 <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[5px]'>
                    <div className='flex justify-between items-center space-x-[14px]'>
                        <img src={request3} alt="" className="size-12 md:size-auto"/>
                        <div className='flex flex-col'>
                            <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>Kiran</h2>
                            <h3 className='font-third font-medium text-[10px] md:text-[12px] text-[#4D4D4D]/75'>Hi.........!</h3>
                        </div>
                    </div>
                    <div>
                        <p className='font-third font-medium text-[8px] md:text-[10px] text-secondary/50'>Today, 8:56pm</p>
                    </div>
                </div>
                   <div className='flex justify-between items-center mt-[18px]  pb-3  px-[5px]'>
                    <div className='flex justify-between items-center space-x-[14px]'>
                        <img src={request5} alt="" />
                        <div className='flex flex-col'>
                            <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>Tejeshwini</h2>
                            <h3 className='font-third font-medium text-[10px] md:text-[12px] text-[#4D4D4D]/75'>Where are you?</h3>
                        </div>
                    </div>
                    <div>
                       <p className='font-third font-medium text-[8px] md:text-[10px] text-secondary/50'>Today, 8:56pm</p>
                    </div>
                </div>
               </div>
            
            </div>
    </div>
  )
}

export default Friends