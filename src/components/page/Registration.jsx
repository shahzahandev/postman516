import { use, useState } from "react"
import registration from "../../assets/registration.png"
import { Link, useNavigate } from "react-router"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner'

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
    // email handle function
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }
    // full name handle function
    const handleFullName = (e) => {
        setFullName(e.target.value)
        setFullNameErr("")
    }
    // password handle function
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordErr("")
    }
    // button handle for all activity
    const handleSignUp = () => {
        console.log(email, fullName, password);
        // if it is email & valid email
        if (!email) {
            // for empty massege
            setEmailErr("Must Required your email address.")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                // for invalid massege
                setEmailErr("Please, Enter right email address.");
            }
        }
        // if full name entered
        if (!fullName) {
            setFullNameErr("Please, Enter your name here.")
        }
        // if password entered
        if (!password) {
            setPasswordErr("Enter your password.")
        }
        if (email && fullName && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            // if valid email,fullName & password entered, It will go to next move. Fast loadding will be active. And send a verification to this email. 
            setLoadding(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    sendEmailVerification(auth.currentUser)
                    // Sign up And toast massege will show, User name with full name   
                    toast.success("Congraculation, " + fullName + " Your registration successfully Done. Verify your email.")
                    // After 4 second it will go to the Login page.
                    setTimeout(() => {
                        navigate("/login")
                        // loadding will be unActive.
                        setLoadding(false)
                    }, 4000)
                })
                //  if show some error here
                .catch((error) => {
                    const errorCode = error.code;
                    // err toastify massage
                    toast.error("This Email is already-in-use. Try another.")
                    setEmailErr("Sorry, This Email is already-in-use. Try Another.")
                    setLoadding(false)
                }).finally(() => {
                    // if every thing ok, input value will be empty.
                    setEmail("")
                    setFullName("")
                    setPassword("")
                });
        }
    }
    return (
        <div>
            <div className="flex md:flex-row flex-col">
                {/* for toastify */}
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
                    theme="dark"
                    transition={Bounce}
                />
                <div className=" md:w-1/2 flex justify-center md:justify-end md:pt-[70px] bg-[#F5F5F5]">
                    <div className="md:mr-[70px]">
                        <h1 className="font-secondary font-bold text-[24px] md:text-[35px] leading-auto text-primary pt-[50px] md:pt-0">Get started with easily register</h1>
                        <p className="font-secondary font-normal text-[16px] md:text-[20px] leading-auto text-secondary/50 md:mt-[5px]">Free register and you can enjoy it</p>
                        {/* email */}
                        <div className="md:w-[368px] relative mt-[40px]">
                            <input onChange={handleEmail}
                                type="email"
                                value={email}
                                placeholder="Enter Your Email  Address."
                                className=" w-full py-[15px] md:py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[14px] md:text-[20px] leading-auto  border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Email Address</div>
                            <p className="z-[666] bg-red-100 text-[12px] md:text-[14px] text-red-600 absolute md:bottom-[-21px] rounded-br-[8px] rounded-bl-[8px] left-0 pl-[55px] w-full">{emailErr}</p>
                        </div>
                        {/* fullName */}
                        <div className="w-[368px] relative mt-[40px]">
                            <input onChange={handleFullName}
                                type="text"
                                value={fullName}
                                placeholder="Enter Your Name Here."
                                className=" w-full py-[15px] md:py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary text-[14px] md:text-[20px] leading-auto border-2 border-secondary/30 rounded-[8px] outline-none" />
                            <div className="absolute top-[-20px] left-[37px] font-secondary font-semibold text-[14px] leading-auto text-primary/70 bg-[#F5F5F5] py-2 px-4 tracking-[1.5px]">Full Name</div>
                            <p className="z-[666] bg-red-100 text-[12px] md:text-[14px] text-red-600 absolute md:bottom-[-21px] rounded-br-[8px] rounded-bl-[8px] left-0 pl-[55px] w-full">{fullNameErr}</p>
                        </div>
                        {/* password */}
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
                                    (<div className="flex justify-center items-center mt-[-10px] md:mt-[-20px] scale-90">
                                        (<RotatingLines
                                            visible={true}
                                            height="60"
                                            width="60"
                                            color="green"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />)
                                    </div>
                                    ) :
                                    ((<button onClick={handleSignUp} className="z-[1] relative font-secondary font-semibold text-[16px] md:text-[20px] leading-auto text-white w-full bg-bg-black transition-all duration-300 rounded-[86px] py-[15px] md:py-[20px] hover:bg-gray-600 cursor-pointer">
                                        <span className="">Sign up</span>
                                        <span className="absolute top-1/6 left-[145px] bg-[#5B36F5]/20 w-[78px] h-[50px] z-[-1] blur-[10px] rounded-[50px]"></span>
                                    </button>))
                            }
                        </div>
                        <div className="flex justify-center mt-[5px] md:mt-[15px] w-[368px]">
                            <p className="font-primary font-normal text-[12px] md:text-[13px] leading-auto text-primary mb-[10px] md:mb-0">Already  have an account ? <Link to="/login">
                                <span className="font-bold text-[#EA6C00] text-center transition-all duration-200 hover:text-red-500">Sign In</span>
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