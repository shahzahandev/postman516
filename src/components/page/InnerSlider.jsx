import innerimag from "../../assets/innerimg.png"
import { GoHome } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../slices/counterSlice";

const InnerSlider = () => {
    const data = useSelector((selector) => (selector?.userInfo?.value)
    )
    const auth = getAuth();
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const handleSingOut = () => {
        signOut(auth).then(() => {
            // Removed localStorage
            localStorage.removeItem("UserInfo")
            dispatch(userInfo(null))
          
            setTimeout(() => {
                 // Sign-out successful.
                navigate("/login")
                console.log("log Out");
                
            }, 1500)
        }).catch((error) => {
            // An error happened.
        });
    }
  

    return (
        <>
            <div className='fixed md:absolute bg-primary md:bg-primary ml-2  md:ml-[32px] w-[80px] md:w-[186px] h-full md:h-[954px] rounded-[20px]'>
                <div className='flex justify-center flex-col items-center pt-5 md:pt-[38px]'>
                    <img src={innerimag} alt="" className="size-15 md:size-auto" />
                    <p className="relative font-bold text-[#bae1e8] md:text-[#bfc1c1]  mt-2 font-third text-[10px] md:text-[16px] text-center">{data?.displayName || data?.user?.displayName}</p>
                    <span className=" w-[13px] h-[12px] rounded-[50%] bg-green-500 shadow-[0px_0px_7px_0px] shadow-[#03d24f]"></span>
                    
                </div>
                <div className='relative'>
                    <div className='text-white relative mt-[50px] md:mt-[78px]'>
                        <div className='absolute right-0 left-4 md:left-[25px] pt-[20px] md:pt-[25px] pb-[20px] md:pb-[25px] pl-[20px] md:pl-[45px] md:pr-[70px]  rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white after:absolute after:content-[""] after:w-[8px] after:bg-primary after:md:bg-[#1E1E1E] after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000] group'>
                            <GoHome className='text-3xl md:text-5xl text-[#C3C3C3] group-hover:text-secondary' />
                        </div>

                        <div className='absolute top-20 md:top-30 right-0 left-4 md:left-[25px] pt-[20px] md:pt-[25px] pb-[20px] md:pb-[25px] pl-[20px] md:pl-[45px] md:pr-[70px]  rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white group after:absolute after:content-[""] after:w-[8px] after:bg-primary after:md:bg-secondary after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000]'>
                            <LuMessageCircleMore className='text-3xl md:text-5xl text-[#C3C3C3] group-hover:text-secondary ' />
                        </div>

                        <div className='absolute top-40 md:top-60 right-0 left-4 md:left-[25px] pt-[20px] md:pt-[25px] pb-[20px] md:pb-[25px] pl-[20px] md:pl-[45px] md:pr-[70px]  rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white group after:absolute after:content-[""] after:w-[8px] after:bg-primary after:md:bg-secondary after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000]'>
                            <IoSettingsOutline className='text-3xl md:text-5xl text-[#C3C3C3] group-hover:text-secondary' />
                        </div>

                    </div>

                </div>
                <div className='absolute right-0 bottom-[47px] left-4 md:left-[25px] pt-[20px] md:pt-[25px] pb-[20px] md:pb-[25px] pl-[20px] md:pl-[45px] md:pr-[70px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer transition-all duration-300 hover:bg-white group after:absolute after:content-[""] after:w-[8px] after:bg-primary after:md:bg-secondary after:h-full after:top-0 after:right-0 after:rounded-tl-[20px] after:rounded-bl-[20px] after:shadow-[-1px_0px_4px_0px] after:shadow-[#000000]'>
                    <ImExit onClick={handleSingOut} className='text-[#C3C3C3] text-3xl md:text-5xl group-hover:text-secondary' />

                </div>
            </div>
        </>


    )
}

export default InnerSlider