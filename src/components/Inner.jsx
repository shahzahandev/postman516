import { Link } from 'react-router'

const Inner = () => {
    return (
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
        </div>
    )
}

export default Inner