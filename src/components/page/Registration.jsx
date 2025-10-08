import registration from "../../assets/registration.png"

const Registration = () => {
    return (
        <div>
            <div className="flex">
                <div className=" w-1/2 flex justify-end pt-[70px] bg-[#F5F5F5]">
                    <div className="mr-[70px]">
                        <h1 className="font-secondary font-bold text-[35px] leading-auto text-primary">Get started with easily register</h1>
                        <p className="font-secondary font-normal text-[20px] leading-auto text-secondary/50 mt-[5px]">Free register and you can enjoy it</p>
                        <div className="w-[368px] relative mt-[40px]">
                            <input type="gmail" placeholder="Enter Your Email  Address." className=" w-full py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto  border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Email Address</div>
                        </div>
                        <div className="w-[368px] relative mt-[40px]">
                            <input type="text" placeholder="Enter Your Name Here." className=" w-full py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Full Name</div>
                        </div>
                        <div className="w-[368px] relative mt-[40px]">
                            <input type="password" placeholder="Enter Your Password." className=" w-full py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto  border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Password</div>
                        </div>
                        <div className="w-[368px] mt-[30px]">
                            <button className="z-[1] relative font-secondary font-semibold text-[20px] leading-auto text-white w-full bg-bg-black rounded-[86px] py-[20px]"><span className="">Sign up</span>
                                <span className="absolute top-1/6 left-[145px] bg-[#5B36F5]/20 w-[78px] h-[50px] z-[-1] blur-[10px] rounded-[50px]"></span>
                            </button>
                        </div>
                        <div className="flex justify-center mt-[25px] w-[368px]">
                            <p className="font-primary font-normal text-[13px] leading-auto text-primary">Already  have an account ? <a href="" className="font-bold text-[#EA6C00] text-center">Sign In</a></p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={registration} alt="" className="w-full h-screen object-cover" /></div>
            </div>
        </div>
    )
}

export default Registration