import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  // varibale for email
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")

  // handle email function
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("")
  }
  // handle reset password btn here
  const handleBtn = () => {
    // if email massage empty
    if (!email) {
      setEmailErr("Must Required email address.")
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        // for valid email massage
        setEmailErr("Please, Enter right email address.");
      }
    }
    if (email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      // if have email and it's valid email
      // sent reset password to your email, check it
      sendPasswordResetEmail(auth, email)
        .then((user) => {
          toast.success("Check your Email & Set a new Password.")
          // success here
          console.log(user);
          // delay for go to login page
          setTimeout(() => {
            navigate("/login")
          }, 5000)

        })
        .catch((error) => {
          //error here
          const errorCode = error.code;
          console.log(errorCode);
        });
    }
  }
  return (
    <>
    <div className='bg-gray-600 w-full h-screen flex justify-center items-center'>
      <ToastContainer
        position="top-right"
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
      <div className='relative bg-linear-to-r/srgb from-[#ec5a92] to-[hsl(18,80%,67%)] py-[50px] px-[25px] md:px-[100px] rounded-[10px] '>
        <h2 className='text-2xl md:text-3xl text-primary font-bold font-primary capitalize'>forgot password</h2>
        <input type="email"
          onChange={handleEmail}
          value={email}
          placeholder="Enter Your Email  Address."
          className="relative mt-[25px] w-auto md:w-[500px] py-[10px] md:py-[26px] pl-[52px] pr-[66px] font-secondary font-semibold text-primary bg-white text-[14px] md:text-[20px] leading-auto  border-2 border-secondary/30 rounded-[8px] outline-none" />

        <div className='relative'>
          <p className="z-[666] bg-red-100 text-[12px] md:text-[14px] text-red-600 absolute md:bottom-[-21px] rounded-br-[8px] rounded-bl-[8px] left-0 pl-[55px] w-full">
            {emailErr}
          </p>
        </div>
        <div className='flex justify-between mt-[15px] md:mt-[20px] space-x-2'>
          <button onClick={handleBtn} className='bg-primary text-white cursor-pointer mt-4 py-[8px] md:py-[10px] px-[30px] md:px-[70px] rounded-[8px] capitalize text-[12px] md:text-[16px] font-semibold font-primary transition-all duration-300 hover:bg-green-600 '>set password</button>
          <Link to="/goback">
            <button className='bg-primary text-white cursor-pointer mt-4 py-[8px] md:py-[10px] px-[30px] md:px-[70px] rounded-[8px] capitalize text-[12px] md:text-[16px] font-semibold font-primary transition-all duration-300 hover:bg-green-600'>go back</button>
          </Link>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default ForgotPassword