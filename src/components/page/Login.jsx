import login from "../../assets/login.jpg"
import google from "../../assets/google-login.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { FaEye, FaEyeSlash, FaLeaf } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { DNA } from 'react-loader-spinner'
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../slices/counterSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // variable for email
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    // variable for password
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    // variable for reaction timing activity
    const [show, setShow] = useState(false)
    const [signloadding, setSignloadding] = useState(false);
    // email handle function
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr(" ")
    }
    // password handle function
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordErr(" ")
    }
    // handle SignUp for all activity
    const handleSignUp = () => {
        // console.log(email);
        // console.log(password);
        if (!email) {
            // for empty massage
            setEmailErr("Must Required you email Address.")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                // for valid email massage
                setEmailErr("Please, Enter your right email address.")
            }
        }
        if (!password) {
            // for empty password massage
            setPasswordErr("Enter your password here.")
        }
        if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            // if ever thing is ok than it will go to next move
            setSignloadding(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    //success here
                    // console.log(user);
                    //toastify massage
                    toast.success("Login successfully Done.")
                    //duration
                    dispatch(userInfo(user))
                    localStorage.setItem("UserInfo", JSON.stringify(user))
                    setTimeout(() => {
                        // finally go to the next page
                        navigate("/inner")
                        //loadder false
                        setSignloadding(false)
                    }, 3000);

                })
                .catch((error) => {
                    //error massage here
                    const errorCode = error.code;
                    // console.log(errorCode);
                    // err toastify massage
                    toast.error("Please, Provite right Email & Password.")
                    setSignloadding(false)
                });
        }
    }

    //Sign Up with Google
    const handleGoogleSign = () => {
        signInWithPopup(auth, provider)
            .then((user) => {
                //success here
                // console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                // console.log(errorCode);
            });
    }

    return (
        <div className="">
            <div>
                {/* toastify */}
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
            </div>
            <div className="md:flex space-y-4">
                <div className=" px-[70px] md:px-0 md:w-1/2 flex  md:justify-end pt-[10px] md:pt-[60px] bg-[#F5F5F5]">
                    <div className="md:mr-[174px]">
                        <h1 className="font-secondary font-bold text-[24px] md:text-[35px] leading-auto text-primary">Login to your account!</h1>
                        <div className="mt-[5px]">
                            <img onClick={handleGoogleSign} src={google} alt="" className="w-[170px] md:w-auto" />
                        </div>
                        {/* email */}
                        <div className="w-[250px] md:w-[368px] relative mt-[30px]">
                            <input onChange={handleEmail}
                                type="email"
                                value={email}
                                placeholder="Enter Your Email  Address."
                                className=" w-full pt-[26px] pb-[15px] pl-[0] pr-[66px] font-secondary font-semibold text-primary text-[16px] md:text-[20px] leading-auto  border-b-2 border-secondary/30 outline-none" />
                            <div className="absolute top-[-20px] left-[0px] font-secondary font-semibold text-[12px] md:text-[14px] leading-auto text-primary/70  py-3 pr-3 pl-0 tracking-[1.5px]">Email Address</div>
                            <p className="absolute w-full bg-red-100 text-red-600 text-[12px] md:text-[14px] px-4 rounded-br-[8px] rounded-bl-[8px]">{emailErr}</p>
                        </div>
                        {/* password */}
                        <div className="w-[250px] md:w-[368px] relative mt-[40px]">
                            <input onChange={handlePassword}
                                value={password}
                                type={show ? "text" : "password"}
                                placeholder="Enter Your Password."
                                className=" w-full pt-[26px] pb-[15px] pl-[0px] pr-[66px] font-secondary font-semibold text-primary text-[16px] md:text-[20px] leading-auto  border-b-2 border-secondary/30 outline-none" />
                            <div onClick={() => setShow(!show)} className="absolute top-[38%] md:top-[38%] right-[20px] text-[20px] md:text-2xl">
                                {
                                    show ?
                                        (< FaEye />) :
                                        (<FaEyeSlash />)
                                }
                            </div>
                            <div className="absolute top-[-20px] left-[0px] font-secondary font-semibold text-[12px] md:text-[14px] leading-auto text-primary/70  py-3 pr-3 pl-0 tracking-[1.5px]">Password</div>
                            <p className="absolute w-full bg-red-100 text-red-600 text-[12px] md:text-[14px] px-4 rounded-br-[8px] rounded-bl-[8px]">{passwordErr}</p>
                        </div>
                        <div className="w-[250px] md:w-[368px] mt-[40px]">
                            {
                                signloadding ?
                                    <div className="flex justify-center items-center w-[280px] md:w-[368px] mt-[-10px] ml-[-20px] md:ml-0">
                                        <DNA
                                            visible={true}
                                            height="60"
                                            width="80"
                                            ariaLabel="dna-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="dna-wrapper"
                                        />
                                    </div> :
                                    (<button onClick={handleSignUp} className="z-[1] relative font-secondary font-semibold text-[16px] md:text-[20px] leading-auto text-white w-full bg-bg-black rounded-[86px] py-[10px] md:py-[20px] cursor-pointer"> <span>Login to Continue</span>
                                        <span className="absolute top-1/7 left-[95px] bg-[#5B36F5]/20 rounded-[40px] blur-[15px] w-[180px] h-[50px] z-[-1]"></span>
                                    </button>)
                            }
                        </div>
                        <div className=" text-center mt-[8px] md:mt-[15px] w-[250px] md:w-[368px]">
                            <p className="text-[12px] md:text-[15px]">
                                <Link to="/forgot">
                                    <span className="text-[14px] md:text-[16px] font-semibold text-green-500 hover:text-red-500 transition-all duration-300">Forgot
                                    </span>
                                </Link> your password?
                            </p>
                        </div>
                        <div className="flex justify-center mt-[2px] w-[250px] md:w-[368px]">
                            <p className="font-primary font-normal text-[13px] leading-auto text-primary">Don’t have an account ? <Link to="/registration">
                                <span className="font-bold text-[#EA6C00] text-center transition-all duration-200 hover:text-red-500">Sign Up</span>
                            </Link></p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src={login} alt="" className="w-full h-screen object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Login