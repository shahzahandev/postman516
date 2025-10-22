import React, { useState } from 'react'
import { DNA } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    const [start, setStart] = useState(false)

    const handleStart = () => {
        setStart(true)
        setTimeout(() => {
            navigate("/registration")
        }, 2000)
    }

    return (
        <div className='bg-[url(./assets/home11.webp)] bg-center bg-cover w-full h-screen flex justify-center items-center'>
            <div className='bg-linear-to-r/srgb from-[#f36481] to-[hsl(18,80%,67%)] py-[10px] md:py-[30px] px-[10px] md:px-[80px] rounded-[10px] text-center border-4 border-[#e39b9b]'>
                <img src="" alt="" />
                <h1 className='font-third font-bold text-2xl md:text-4xl text-primary capitalize '>postman</h1>
                <h2 className='text-[12px] md:text-[14px] font-third capitalize font-medium text-primary  tracking-tight md:mt-[10px]'>a chating application by <span className='font-bold text-gray-700 tracking-normal'>Siraj</span></h2>
                <Link to="/">
                    <button onClick={handleStart} className='text-[14px] md:text-2xl font-semibold text-primary bg-gray-500 px-[30px] md:px-[50px] py-[4px] md:py-[10px] rounded-[20px] cursor-pointer capitalize mt-[10px] md:mt-[20px] border-none transition-all duration-300 hover:bg-gray-700 hover:text-white/80'>
                        {
                            start ?
                                (<DNA
                                    visible={true}
                                    height="35"
                                    width="100"
                                    ariaLabel="dna-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="dna-wrapper"
                                />) :
                                (<span> get started</span>
                                )
                        }
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home