import { BsThreeDotsVertical } from "react-icons/bs";
import request1 from "../../../assets/friendrequest1.png"
import request2 from "../../../assets/friendrequest2.png"
import request3 from "../../../assets/friendrequest3.png"
import { TiPlus } from "react-icons/ti";


const UserList = () => {
    return (
        <div>
            <div className='py-2 px-10 shadow-[0px_4px_4px_0px] shadow-[#000000]/50  rounded-[20px]'>
                {/* heading */}
                <div className=' flex justify-between items-center'>
                    <h2 className='font-third font-semibold text-[20px] leading-auto text-secondary'>User List</h2>
                    <BsThreeDotsVertical className='text-2xl' />
                </div>

                <div className=''>
                    <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3 px-[5px]'>
                        <div className='flex justify-between items-center space-x-[14px]'>
                            <img src={request1} alt="" />
                            <div className='flex flex-col'>
                                <h2 className='font-third font-semibold text-[14px] text-secondary'>Friends Reunion</h2>
                                <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</h3>
                            </div>
                        </div>
                        <div>
                            <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" ><TiPlus className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[5px]'>
                        <div className='flex justify-between items-center space-x-[14px]'>
                            <img src={request2} alt="" />
                            <div className='flex flex-col'>
                                <h2 className='font-third font-semibold text-[14px] text-secondary'>Friends Forever</h2>
                                <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</h3>
                            </div>
                        </div>
                        <div>
                           <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" ><TiPlus className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3 px-[5px]'>
                        <div className='flex justify-between items-center space-x-[14px]'>
                            <img src={request1} alt="" />
                            <div className='flex flex-col'>
                                <h2 className='font-third font-semibold text-[14px] text-secondary'>Friends Reunion</h2>
                                <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</h3>
                            </div>
                        </div>
                        <div>
                            <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" ><TiPlus className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[18px]  pb-3  px-[5px]'>
                        <div className='flex justify-between items-center space-x-[14px]'>
                            <img src={request3} alt="" />
                            <div className='flex flex-col'>
                                <h2 className='font-third font-semibold text-[14px] text-secondary'>Crazy Cousins</h2>
                                <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</h3>
                            </div>
                        </div>
                        <div>
                            <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" ><TiPlus className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[18px] pb-3 px-[5px]'>
                        <div className='flex justify-between items-center space-x-[14px]'>
                            <img src={request1} alt="" />
                            <div className='flex flex-col'>
                                <h2 className='font-third font-semibold text-[14px] text-secondary'>Friends Reunion</h2>
                                <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</h3>
                            </div>
                        </div>
                        <div>
                            <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" ><TiPlus className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserList