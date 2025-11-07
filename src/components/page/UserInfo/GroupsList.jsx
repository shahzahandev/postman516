import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import request1 from "../../../assets/friendrequest1.png"
import request2 from "../../../assets/friendrequest2.png"
import request3 from "../../../assets/friendrequest3.png"

const GroupsList = () => {
  return (
     <div className='py-2 px-3 md:px-10 shadow-[0px_4px_4px_0px] shadow-[#000000]/25  rounded-[20px] h-[451px] overflow-y-scroll pt-[10px] md:pt-[20px]'>
            {/* heading */}
            <div className=''>
                <div className='flex justify-between items-center'>
                <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Groups List</h2>
                <BsThreeDotsVertical  className='md:text-2xl'/>
            </div>
            </div>
    
           <div className=''> 
             <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  md:px-[5px]'>
                <div className='flex justify-between items-center space-x-[14px]'>
                    <img src={request1} alt="" className='size-12 md:size-auto'/>
                    <div className='flex flex-col'>
                        <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>Friends Reunion</h2>
                        <h3 className='font-third font-medium text-[11px] md:text-[14px] text-[#4D4D4D]/75'>How are you?</h3>
                    </div>
                </div>
                <div>
                    <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Join</button>
                </div>
            </div>
              <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  md:px-[5px]'>
                <div className='flex justify-between items-center space-x-[14px]'>
                    <img src={request2} alt="" className='size-12 md:size-auto'/>
                    <div className='flex flex-col'>
                        <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>Friends Reunion</h2>
                        <h3 className='font-third font-medium text-[11px] md:text-[14px] text-[#4D4D4D]/75'>How are you?</h3>
                    </div>
                </div>
                <div>
                    <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Join</button>
                </div>
            </div>
              <div className='flex justify-between items-center mt-[18px] pb-3  md:px-[5px]'>
                <div className='flex justify-between items-center space-x-[14px]'>
                    <img src={request3} alt="" className='size-12 md:size-auto'/>
                    <div className='flex flex-col'>
                        <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>Friends Reunion</h2>
                        <h3 className='font-third font-medium text-[11px] md:text-[14px] text-[#4D4D4D]/75'>How are you?</h3>
                    </div>
                </div>
                <div>
                    <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Join</button>
                </div>
            </div>
               <div className='flex justify-between items-center mt-[18px] pb-3  md:px-[5px]'>
                <div className='flex justify-between items-center space-x-[14px]'>
                    <img src={request3} alt="" className='size-12 md:size-auto'/>
                    <div className='flex flex-col'>
                        <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>Friends Reunion</h2>
                        <h3 className='font-third font-medium text-[11px] md:text-[14px] text-[#4D4D4D]/75'>How are you?</h3>
                    </div>
                </div>
                <div>
                    <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Join</button>
                </div>
            </div>
              <div className='flex justify-between items-center mt-[18px] pb-3  md:px-[5px]'>
                <div className='flex justify-between items-center space-x-[14px]'>
                    <img src={request3} alt="" className='size-12 md:size-auto'/>
                    <div className='flex flex-col'>
                        <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>Friends Reunion</h2>
                        <h3 className='font-third font-medium text-[11px] md:text-[14px] text-[#4D4D4D]/75'>How are you?</h3>
                    </div>
                </div>
                <div>
                    <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Join</button>
                </div>
            </div>
           </div>
        
        </div>
  )
}

export default GroupsList