import React from 'react'
import InnerSlider from '../../InnerSlider'
import FriendRequest from '../FriendRequest'
import Friends from '../Friends'

const Message = () => {
  return (
      <div className='bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] flex pt-4 md:pt-[35px] space-x-5 overflow-x-hidden '>
                        <InnerSlider active="message"></InnerSlider>
                        <div className='flex flex-col md:flex-row ml-25 md:ml-[280px] space-x-10'>
                            <div className='md:flex md:space-x-[50px] space-y-10  h-[135vh]'>
                                <div className='w-[300px]  md:w-[527px]'>
                                   <Friends></Friends>
                                </div>
                                <div className='w-[300px] h-[800px] md:w-[627px] bg-pink-100'>
                                 h
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Message