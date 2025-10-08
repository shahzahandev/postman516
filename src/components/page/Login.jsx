import login from "../../assets/login.jpg"
import google from "../../assets/google-login.png"

const Login = () => {
    return (
        <div>
            <div className="flex">
                <div className=" w-1/2 flex justify-end pt-[100px] bg-[#F5F5F5]">
                    <div className="mr-[174px]">
                        <h1 className="font-secondary font-bold text-[35px] leading-auto text-primary">Login to your account!</h1>
                        <div className="mt-[20px]">
                            <img src={google} alt="" />
                        </div>
                        <div className="w-[368px] relative mt-[40px]">
                            <input type="gmail" placeholder="Enter Your Email  Address." className=" w-full pt-[26px] pb-[15px] pl-[0] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto  border-b-2 border-secondary/30 outline-none" />
                            <div className="absolute top-[-20px] left-[0px] font-secondary font-semibold text-[14px] leading-auto text-primary/70  py-3 pr-3 pl-0 tracking-[1.5px]">Email Address</div>
                        </div>
                        <div className="w-[368px] relative mt-[40px] text-[20px]">
                            <input type="password" placeholder="Enter Your Password." className=" w-full pt-[26px] pb-[15px] pl-[0px] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto  border-b-2 border-secondary/30 outline-none" />
                            <div className="absolute top-[-20px] left-[0px] font-secondary font-semibold text-[14px] leading-auto text-primary/70  py-3 pr-3 pl-0 tracking-[1.5px]">Password</div>
                        </div>
                        <div className="w-[368px] mt-[40px]">
                            <button className="z-[1] relative font-secondary font-semibold text-[20px] leading-auto text-white w-full bg-bg-black rounded-[86px] py-[20px]"> <span>Login to Continue</span>
                                <span className="absolute top-1/7 left-[95px] bg-[#5B36F5]/20 rounded-[40px] blur-[15px] w-[180px] h-[50px] z-[-1]"></span>
                            </button>
                        </div>
                        <div className="flex justify-center mt-[30px] w-[368px]">
                            <p className="font-primary font-normal text-[13px] leading-auto text-primary">Don’t have an account ?  <a href="" className="font-bold text-[#EA6C00] text-center">Sign In</a></p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={login} alt="" className="w-full h-screen object-cover" /></div>
            </div>
        </div>
    )
}

export default Login