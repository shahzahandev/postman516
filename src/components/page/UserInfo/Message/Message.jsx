import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import InnerSlider from '../../InnerSlider'
import Friends from '../Friends'
import request3 from "../../../../assets/friendrequest3.png"


const Message = () => {
    return (
        <div className='bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] flex pt-4 md:pt-[35px] space-x-5 overflow-x-hidden'>
            <InnerSlider active="message"></InnerSlider>
            <div className='flex flex-col md:flex-row ml-25 md:ml-[280px] space-x-10 h-135vh'>
                <div className='md:flex md:space-x-[50px] space-y-10'>
                    <div className='w-[300px] md:w-[450px]'>
                        <Friends></Friends>
                    </div>
                    <div className='w-[300px] md:w-[627px] bg-linear-to-r/srgb from-[#e7ed6b] to-[#1dc4e2] px-6 py-5 rounded-[20px] '>
                        <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3 px-[5px] '>
                            <div className='flex justify-between items-center space-x-[14px]'>
                                <img src={request3} alt="" className="size-12 md:size-auto" />
                                <div className='flex flex-col'>
                                    <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>
                                        User
                                    </h2>
                                    <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Online</h3>
                                </div>
                            </div>
                            <div>
                                <BsThreeDotsVertical className='md:text-2xl' />
                            </div>
                        </div>
                      <div className=''>
                          <div className='font-third font-medium mt-[20px] md:mt-[26px]'>
                            <div className='relative mb-2'>
                                <h2 className='bg-linear-to-r/srgb from-[#ec5a92] to-[#ee9068] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[12px] md:text-[16px] text-primary'>there is no permanent friends in forein polisy, only permanents interest</h2>
                                <div className='absolute bottom-[18px] left-[-5px] text-[#ec5a92] '><TbTriangleFilled /></div>
                                <p className='text-[12px] text-[#000000]/50 mt-[2px]'>Today, 2:01pm</p>
                            </div>
                               <div className='relative'>
                                <h2 className='bg-linear-to-r/srgb from-[#ec5a92] to-[#ee9068] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[12px] md:text-[16px] text-primary'>permanent friends in forein polisy,</h2>
                                <div className='absolute bottom-[18px] left-[-5px] text-[#ec5a92] '><TbTriangleFilled /></div>
                                <p className='text-[12px] text-[#000000]/50 mt-[2px]'>Today, 2:01pm</p>
                            </div>
                        </div>
                           <div className='font-third font-medium mt-2 text-end'>
                            <div className='relative mb-2'>
                                <h2 className='bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[12px] md:text-[16px] text-primary'>There is no permanenet friends in forien polisy, only permanents interest</h2>
                                <div className='absolute bottom-[18px] right-[-5px] text-[#ec5a92] '><TbTriangleFilled /></div>
                                <p className='text-[12px] text-[#000000]/50 mt-[2px] '>Today, 2:01pm</p>
                            </div>
                               <div className='relative'>
                                <h2 className='bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92]  inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[12px] md:text-[16px] text-primary'>only permanents interest</h2>
                                <div className='absolute bottom-[18px] right-[-5px] text-[#ec5a92] '><TbTriangleFilled /></div>
                                <p className='text-[12px] text-[#000000]/50 mt-[2px]'>Today, 2:01pm</p>
                            </div>
                        </div>
                          <div className='font-third font-medium mt-2'>
                           <div className='relative'>
                                <h2 className='bg-linear-to-r/srgb from-[#ec5a92] to-[#ee9068] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[12px] md:text-[16px] text-primary'>permanent friends in forein polisy,</h2>
                                <div className='absolute bottom-[18px] left-[-5px] text-[#ec5a92] '><TbTriangleFilled /></div>
                                <p className='text-[12px] text-[#000000]/50 mt-[2px]'>Today, 2:01pm</p>
                            </div>
                              <div className='relative mb-2'>
                                <h2 className='bg-linear-to-r/srgb from-[#ec5a92] to-[#ee9068] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[12px] md:text-[16px] text-primary'>there is no permanent friends in forein polisy, only permanents interest</h2>
                                <div className='absolute bottom-[18px] left-[-5px] text-[#ec5a92] '><TbTriangleFilled /></div>
                                <p className='text-[12px] text-[#000000]/50 mt-[2px]'>Today, 2:01pm</p>
                            </div>
                        </div>
                          <div className=' flex space-x-2 items-center mt-[30px]'>
                              <div className='flex items-center justify-between bg-[#F1F1F1] rounded-[5px] px-5 py-2 w-full'>
                                  <input type="text" placeholder='text here' className='font-semibold text-[12px] md:text-[16px] py-2 rounded-[5px] w-full outline-0' />
                                <div className='flex space-x-2'>
                                      <MdOutlineCameraAlt className='text-[16px] md:text-2xl'/>
                                <IoMdHappy className='text-[16px] md:text-2xl'/>
                                </div>
                              </div>
                                 <div className='p-4 rounded-[5px] bg-secondary'>                                         <CiLocationArrow1 className='text-white text-[16px] md:text-2xl'/>
                                 </div>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message