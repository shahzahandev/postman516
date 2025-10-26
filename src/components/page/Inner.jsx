import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Inner = () => {

    const data = useSelector((state) => state.userInfo.value)
    console.log(data);
    
    const [verify, setVerify] = useState()

    useEffect(() =>{
        if(data.emailVerified){
            setVerify(true)
        }
    }, [])

    return (
        <>
        {
            verify ?
              <div className='w-full h-screen bg-gray-600 flex justify-center items-center'>
            <div>
                <div className='text-center p-[30px] md:p-[50px] bg-gray-500 w-[400px] md:w-[800px] rounded-[5px]'>
                    <h2 className='font-third font-bold text-[20px] w-[280px] mx-auto md:w-auto md:text-4xl leading-[-2] tracking-tight  text-primary'>This Project is Under Construction.</h2>
                    <span className='font-third font-bold text-secondary text-[18px] md:text-3xl capitalize'>pleace, wait few days...</span>
                    <div className=' mt-[20px] md:mt-[50px] flex justify-center space-x-3 md:space-x-10 items-center'>
                        <Link to="/"> <button className='bg-primary text-white font-semibold md:text-2xl  px-[20px] md:px-[50px] py-[8px] md:py-[15px] rounded-[10px] cursor-pointer transition-all duration-300 capitalize hover:bg-secondary'>home</button></Link>
                        <Link to="/registration"> <button className='bg-primary text-white font-semibold md:text-2xl  px-[20px] md:px-[50px] py-[8px] md:py-[15px] rounded-[10px] cursor-pointer transition-all duration-300 capitalize hover:bg-secondary'>registration</button></Link>
                        <Link to="/login"> <button className='bg-primary text-white font-semibold md:text-2xl  px-[20px] md:px-[50px] py-[8px] md:py-[15px] rounded-[10px] cursor-pointer transition-all duration-300 capitalize hover:bg-secondary'>login</button></Link>
                    </div>
                </div>
            </div>
        </div> :
          <div className='flex justify-center  items-center bg-gray-600 w-full h-screen'>
            <div className='bg-red-200 px-[80px] py-[50px] rounded-2xl text-center w-[800px]'>
                 <h2 className='text-4xl text-primary font-bold mb-[20px]'> Please, Verify your email. </h2>
                 <p className='font-primary text-2xl font-semibold mb-6'>If you complete your email verification & Login again, You can go to our <span className='font-bold text-green-600'> Main page.</span></p>
                  <Link to="/login"> <button className='bg-primary text-white font-semibold md:text-[20px]  px-[20px] md:px-[50px] py-[8px] md:py-[10px] rounded-[10px] cursor-pointer transition-all duration-300 capitalize hover:bg-gray-500'>back to login</button></Link>
            </div>
           
          </div>

     

        }
      
        </>
    )
}

export default Inner