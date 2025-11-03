import { BsThreeDotsVertical } from "react-icons/bs";
import request1 from "../../../assets/friendrequest1.png"
import request2 from "../../../assets/friendrequest2.png"
import request3 from "../../../assets/friendrequest3.png"
import request5 from "../../../assets/friendrequest5.png"

const FriendRequest = () => {
  return (
    <div className='py-2 px-5  rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/25'>
        {/* heading */}
        <div className='flex justify-between items-center'>
            <h2 className='font-third font-semibold text-[20px] leading-auto text-secondary'>Friend  Request</h2>
            <BsThreeDotsVertical  className='text-2xl'/>
        </div>
       <div className=''> 
         <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3 px-[20px]'>
            <div className='flex justify-between items-center space-x-[14px]'>
                <img src={request1} alt="" />
                <div className='flex flex-col'>
                    <h2 className='font-third font-semibold text-[18px] text-secondary'>Raghav</h2>
                    <h3 className='font-third font-medium text-[14px] text-[#4D4D4D]/75'>How are you?</h3>
                </div>
            </div>
            <div>
                <button className='font-third font-semibold text-[20px] text-[#FFFFFF] py-[2px] px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Accept</button>
            </div>
        </div>
         <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[20px]'>
            <div className='flex justify-between items-center space-x-[14px]'>
                <img src={request2} alt="" />
                <div className='flex flex-col'>
                    <h2 className='font-third font-semibold text-[18px] text-secondary'>Swathi</h2>
                    <h3 className='font-third font-medium text-[14px] text-[#4D4D4D]/75'>Dinner?</h3>
                </div>
            </div>
            <div>
                <button className='font-third font-semibold text-[20px] text-[#FFFFFF] py-[2px] px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Accept</button>
            </div>
        </div>
         <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[20px]'>
            <div className='flex justify-between items-center space-x-[14px]'>
                <img src={request3} alt="" />
                <div className='flex flex-col'>
                    <h2 className='font-third font-semibold text-[18px] text-secondary'>Kiran</h2>
                    <h3 className='font-third font-medium text-[14px] text-[#4D4D4D]/75'>Hi.........!</h3>
                </div>
            </div>
            <div>
                <button className='font-third font-semibold text-[20px] text-[#FFFFFF] py-[2px] px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Accept</button>
            </div>
        </div>
           <div className='flex justify-between items-center mt-[18px]  pb-3  px-[20px]'>
            <div className='flex justify-between items-center space-x-[14px]'>
                <img src={request5} alt="" />
                <div className='flex flex-col'>
                    <h2 className='font-third font-semibold text-[18px] text-secondary'>Tejeshwini C</h2>
                    <h3 className='font-third font-medium text-[14px] text-[#4D4D4D]/75'>Where are you?</h3>
                </div>
            </div>
            <div>
                <button className='font-third font-semibold text-[20px] text-[#FFFFFF] py-[2px] px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Accept</button>
            </div>
        </div>
       </div>
    
    </div>
  )
}

export default FriendRequest