import { BsThreeDotsVertical } from "react-icons/bs";
import request2 from "../../../assets/friendrequest2.png"

const FriendRequest = () => {


    return (
        <div className='py-2 px-3  rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/25 h-[451px] overflow-y-scroll'>
            {/* heading */}
            <div className='flex justify-between items-center'>
                <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Friend  Request</h2>
                <BsThreeDotsVertical className='md:text-2xl' />
            </div>
            <div className=''>
                        <div className='flex justify-between items-center mt-[10px] md:mt-[18px] border-b-2 border-bg-black/50 pb-3 md:px-[20px]'>
                            <div className='flex justify-between items-center space-x-[14px]'>
                                <img src={request2} alt="" className="size-12 md:size-auto" />
                                <div className='flex flex-col'>
                                    <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>siraj</h2>
                                     <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Send a Friend Request</h3>
                                </div>
                            </div>
                            <div>
                                <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Accept</button>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default FriendRequest