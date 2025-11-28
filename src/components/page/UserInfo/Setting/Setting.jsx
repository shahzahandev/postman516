import React from 'react'
import InnerSlider from '../../InnerSlider'
import Friends from '../Friends'
import MyGroup from '../MyGroup'

const Setting = () => {
  return (
         <div className='bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] flex pt-4 md:pt-[35px] space-x-5 overflow-x-hidden'>
                        <InnerSlider active="setting"></InnerSlider>
                        <div className='flex flex-col md:flex-row ml-25 md:ml-[280px] space-x-10'>
                            <div className='w-[300px] md:w-[364px] mt-0'>
                                <Friends></Friends>
                                <div className=''>
                                    <MyGroup></MyGroup>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Setting