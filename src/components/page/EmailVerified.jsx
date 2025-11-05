import React from 'react'
import { Link } from 'react-router'

const EmailVerified = () => {
  return (
    <div>
          <div className='flex justify-center items-center bg-gray-600 w-full h-screen'>
                        <div className='bg-linear-to-r/srgb from-[#ec5a92] to-[hsl(18,80%,67%)] px-[30px] md:px-[80px] py-[35px] md:py-[50px] rounded-2xl text-center w-[350px] md:w-[800px]'>
                            <h2 className='text-[24px] md:text-4xl w-[300px] md:w-auto  text-primary font-bold md:mb-[20px]'> Please, Verify your email. </h2>
                            <p className='text-[#403d3d] font-primary md:text-2xl font-semibold mt-2 md:mt-0 mb-2 md:mb-6 w-[300px] md:w-auto'>If you complete your email verification & Login again, You can go to our <span className='font-extrabold text-[20px] text-primary'> Main page.</span></p>
                            <Link to="/login"> <button className='bg-primary text-white font-semibold md:text-[20px]  px-[20px] md:px-[50px] py-[8px] md:py-[10px] rounded-[10px] cursor-pointer transition-all duration-300 capitalize hover:bg-gray-500'>back to login</button></Link>
                        </div>
          </div>
    </div>
  )
}

export default EmailVerified