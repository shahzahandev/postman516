import React from 'react'
import InnerSlider from '../../InnerSlider'
import request1 from "../../../../assets/friendrequest1.png"
import { TfiMarkerAlt } from "react-icons/tfi";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdAddAPhoto } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Setting = () => {
    return (
        <div className='relative  bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] flex pt-4 md:pt-[35px] space-x-5'>
            <div className='relative h-full'> <InnerSlider active="setting"></InnerSlider></div>
            <div className='flex flex-col md:flex-row ml-[80px] md:ml-[250px] space-x-[50px] space-y-6 pb-25'>
                <div className='bg-linear-to-r/srgb from-[#e7ed6b] to-[#1dc4e2] font-third font-semibold py-[26px] px-[26px] rounded-[15px] w-[300px] md:w-[600px] h-[859px]'>
                    <div>
                        <h1 className='text-[12px] md:text-[20px] text-[#000000]'>Profile Settings</h1>
                    </div>
                    <div className='flex items-center mt-[20px] md:mt-[50px] space-x-[20px] md:space-x-[35px] border-b-2 pb-4'>
                        <img src={request1} alt="" />
                        <div className='flex flex-col'>
                            <h2 className='md:text-[25px] text-[#000000]'>Shohel Rana Baig</h2>
                            <p className='text-[12px] md:text-[20px] font-normal text-[#000000]'>Stay home stay safe</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-[37px] mt-[43px] font-third font-normal md:text-[20px] text-[#000000]'>
                        <div className='flex space-x-[36px] items-center'>
                            <div className='text-[26px]'><TfiMarkerAlt />
                            </div>
                            <h4>Edit Profile Name.</h4>
                        </div>
                        <div className='flex space-x-[36px] items-center'>
                            <div className='text-[26px]'><LuMessageCircleMore />
                            </div>
                            <h4>Edit Profile Status Info.</h4>
                        </div>
                        <div className='flex space-x-[36px] items-center'>
                            <div className='text-[26px]'><MdAddAPhoto />
                            </div>
                            <h4>Edit Profile Photo.</h4>
                        </div>
                        <div className='flex space-x-[36px] items-center'>
                            <div className='text-[26px]'><FaRegCircleQuestion />
                            </div>
                            <h4>Help.</h4>
                        </div>
                    </div>
                </div>
                      <div className='bg-linear-to-r/srgb from-[#e7ed6b] to-[#1dc4e2] font-third font-semibold py-[26px] px-[26px] rounded-[15px] w-[300px] md:w-[600px] h-[859px]'>
                    <div>
                        <h1 className=' text-[12px] md:text-[20px] text-[#000000]'>Account Settings</h1>
                    </div>
                   
                    <div className='flex flex-col space-y-[37px] mt-[30px] md:mt-[43px] font-third font-normal md:text-[20px] text-[#000000]'>
                        <div className='flex space-x-[36px] items-center'>
                            <div><FaKey />
                            </div>
                            <h4>Change Password</h4>
                        </div>
                        <div className='flex space-x-[36px] items-center'>
                            <div className='text-[26px]'><MdDelete />
                            </div>
                            <h4>Delete Account.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting