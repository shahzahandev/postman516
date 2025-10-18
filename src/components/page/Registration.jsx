import { use, useState } from "react"
import registration from "../../assets/registration.png"
import { Link, useNavigate } from "react-router"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner'

const Registration = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    // varibale for email
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    // varibale for full Name
    const [fullName, setFullName] = useState("")
    const [fullNameErr, setFullNameErr] = useState("")
    // variable for password
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    // variable for reaction timing activity
    const [show, setShow] = useState(false)
    const [loadding, setLoadding] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }
    const handleFullName = (e) => {
        setFullName(e.target.value)
        setFullNameErr("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordErr("")
    }
    const handleSignUp = () => {
        console.log(email, fullName, password);
        if (!email) {
            setEmailErr("Must Required your email address.")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailErr("Please, Enter right email address.");
            }
        }
        if (!fullName) {
            setFullNameErr("Please, Enter your name here.")
        }
        if (!password) {
            setPasswordErr("Enter your password.")
        }

        if (email && fullName && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
           setLoadding(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    // Signed up    
                    console.log(user, "success");
                    toast.success("Congraculation, Your Registration Successfully Done.")

                    setTimeout(() => {
                        navigate("/login")
                        setLoadding(false)
                    }, 2000)
                   
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    toast.error(errorCode)
                    console.log(errorMessage);
                    setEmailErr("Sorry, This Email is already-in-use. Try Another.")
                    setLoadding(false)
                });
        }
    }
    return (
        <div>
            <div className="flex md:flex-row flex-col ">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
                />

                <div className=" md:w-1/2 flex justify-center md:justify-end pt-[0px] md:pt-[70px] bg-[#F5F5F5]">
                    <div className="mt-[20px] md:mr-[70px] p-[50px]">
                        <h1 className="font-secondary font-bold text-[24px] md:text-[35px] leading-auto text-primary pt-[50px] md:pt-0">Get started with easily register</h1>
                        <p className="font-secondary font-normal text-[16px] md:text-[20px] leading-auto text-secondary/50 md:mt-[5px]">Free register and you can enjoy it</p>
                        <div className="md:w-[368px] relative mt-[40px]">
                            <input onChange={handleEmail} type="gmail"
                                value={email}
                                placeholder="Enter Your Email  Address."
                                className=" w-full py-[15px] md:py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[14px] md:text-[20px] leading-auto  border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Email Address</div>
                            <p className="z-[666] bg-red-100 text-[12px] md:text-[14px] text-red-600 absolute md:bottom-[-21px] rounded-br-[8px] rounded-bl-[8px] left-0 pl-[55px] w-full">{emailErr}</p>
                        </div>
                        <div className="w-[368px] relative mt-[40px]">
                            <input onChange={handleFullName}
                                type="text"
                                value={fullName}
                                placeholder="Enter Your Name Here."
                                className=" w-full py-[15px] md:py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[14px] md:text-[20px] leading-auto border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Full Name</div>
                            <p className="z-[666] bg-red-100 text-[12px] md:text-[14px] text-red-600 absolute md:bottom-[-21px] rounded-br-[8px] rounded-bl-[8px] left-0 pl-[55px] w-full">{fullNameErr}</p>
                        </div>
                        <div className="w-[368px] relative mt-[40px]">
                            <input onChange={handlePassword}
                                value={password}
                                type={show ? "text" : "password"}
                                placeholder="Enter Your Password."
                                className=" w-full py-[15px] md:py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[14px] md:text-[20px] leading-auto  border-2 border-secondary/30 rounded-[8px] outline-none" />

                            <div className="absolute top-[38%] right-[20px] md:text-2xl">
                                {
                                    show ?
                                        (< FaEye onClick={() => setShow(!show)} />) :
                                        (<FaEyeSlash onClick={() => setShow(!show)} />)
                                }
                            </div>

                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Password</div>
                            <p className="z-[666] bg-red-100 text-[12px] md:text-[14px] text-red-600 absolute md:bottom-[-21px] rounded-br-[8px] rounded-bl-[8px] left-0 pl-[55px] w-full">{passwordErr}</p>
                        </div>
                        <div className="relative w-[368px] mt-[30px]">
                            {
                                loadding ?
                                    ( <div className="flex justify-center items-center mt-[-10px] md:mt-[-20px] scale-90">
                                        <ProgressBar
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="#4fa94d"
                                        ariaLabel="progress-bar-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                        </div>
                                    ) :
                                    ((<button onClick={handleSignUp} className="z-[1] relative font-secondary font-semibold text-[16px] md:text-[20px] leading-auto text-white w-full bg-bg-black transition-all duration-300 rounded-[86px] py-[15px] md:py-[20px] hover:bg-gray-600">
                                        <span className="">Sign up</span>
                                        <span className="absolute top-1/6 left-[145px] bg-[#5B36F5]/20 w-[78px] h-[50px] z-[-1] blur-[10px] rounded-[50px]"></span>
                                    </button>))

                            }
                        </div>
                        <div className=" text-center mt-[8px] md:mt-[15px] w-[368px]">
                            <p className="text-[12px] md:text-[15px]"><Link to="/forgot"><span className="text-[14px] md:text-[16px] font-semibold text-green-500 hover:text-red-500 transition-all duration-300">Forgot </span></Link>your password?</p>
                        </div>
                        <div className="flex justify-center md:mt-[5px] w-[368px]">
                            <p className="font-primary font-normal text-[12px] md:text-[13px] leading-auto text-primary">Already  have an account ? <Link to="/login">               <span className="font-bold text-[#EA6C00] text-center">Sign In</span>
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" md:w-1/2">
                    <img src={registration} alt="" className="w-full h-screen object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Registration