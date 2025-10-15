import login from "../../assets/login.jpg"
import google from "../../assets/google-login.png"
import { useState } from "react"
import { Link } from "react-router"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    // variable for email
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    // variable for password
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("")

    const [show, setShow] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr(" ")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordErr(" ")
    }

    const handleSignUp = () => {
        console.log(email);
        console.log(password);

        if (!email) {
            setEmailErr("Must Required you email Address.")
        } else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailErr("Please, Enter your right email address.")
            }
        }
        if (!password) {
            setPasswordErr("Enter your password here.")
        }

    }


    return (
        <div>
            <div className="flex">
                <div className=" w-1/2 flex justify-end pt-[100px] bg-[#F5F5F5]">
                    <div className="mr-[174px]">
                        <h1 className="font-secondary font-bold text-[35px] leading-auto text-primary">Login to your account!</h1>
                        <div className="mt-[10px] mb-[25px]">
                            <img src={google} alt="" />
                        </div>
                        <div className="w-[368px] relative mt-[4i0px]">
                            <input onChange={handleEmail}
                                type="email"
                                value={email}
                                placeholder="Enter Your Email  Address."
                                className=" w-full pt-[26px] pb-[15px] pl-[0] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto  border-b-2 border-secondary/30 outline-none" />
                            <div className="absolute top-[-20px] left-[0px] font-secondary font-semibold text-[14px] leading-auto text-primary/70  py-3 pr-3 pl-0 tracking-[1.5px]">Email Address</div>
                            <p className="absolute w-full bg-red-100 text-red-600 text-[14px] px-4 rounded-br-[8px] rounded-bl-[8px]">{emailErr}</p>
                        </div>
                        <div className="w-[368px] relative mt-[40px] text-[20px]">
                            <input onChange={handlePassword}
                                value={password}
                                type={show ? "text" : "password"}
                                placeholder="Enter Your Password."
                                className=" w-full pt-[26px] pb-[15px] pl-[0px] pr-[66px] font-secondary font-semibold text-primary text-[20px] leading-auto  border-b-2 border-secondary/30 outline-none" />

                            <div onClick={() => setShow(!show)} className="absolute top-[38%] right-[20px] text-2xl">
                                {
                                    show ?
                                        (< FaEye />) :
                                        (<FaEyeSlash />)
                                }
                            </div>
                            <div className="absolute top-[-20px] left-[0px] font-secondary font-semibold text-[14px] leading-auto text-primary/70  py-3 pr-3 pl-0 tracking-[1.5px]">Password</div>
                            <p className="absolute w-full bg-red-100 text-red-600 text-[14px] px-4 rounded-br-[8px] rounded-bl-[8px]">{passwordErr}</p>
                        </div>
                        <div className="w-[368px] mt-[40px]">
                            <button onClick={handleSignUp} className="z-[1] relative font-secondary font-semibold text-[20px] leading-auto text-white w-full bg-bg-black rounded-[86px] py-[20px]"> <span>Login to Continue</span>
                                <span className="absolute top-1/7 left-[95px] bg-[#5B36F5]/20 rounded-[40px] blur-[15px] w-[180px] h-[50px] z-[-1]"></span>
                            </button>
                        </div>
                        <div className="flex justify-center mt-[30px] w-[368px]">
                            <p className="font-primary font-normal text-[13px] leading-auto text-primary">Don’t have an account ? <Link to="/registration">
                                <span className="font-bold text-[#EA6C00] text-center">Sing Up</span>
                            </Link></p>
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