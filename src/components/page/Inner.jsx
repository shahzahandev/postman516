import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import InnerSlider from './InnerSlider'
import GroupsList from './UserInfo/GroupsList'
import Friends from './UserInfo/Friends'
import UserList from './UserInfo/UserList'
import FriendRequest from './UserInfo/FriendRequest'
import MyGroup from './UserInfo/MyGroup'
import BlockedUsers from './UserInfo/BlockedUsers'

const Inner = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const data = useSelector((state) => state.userInfo.value)
    const [verify, setVerify] = useState(false)
    const [loadding, setLoadding] = useState(true)

    onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
            setVerify(true)
            console.log(user);
        }
        setLoadding(false)
    });

    if (loadding) {
        return null
    }

    if (!data) {
        navigate("/login")
    }
    // useEffect(() => {
    //  if(data){
    //     navigate ("/")
    // }
    // })

    return (
        <>
            {
                verify ?
                    <div className='flex mt-4 md:mt-[35px] space-x-5'>
                        <InnerSlider></InnerSlider>
                        <div className='flex flex-col md:flex-row ml-30 md:ml-[280px] space-x-10'>
                            <div className='flex flex-col w-[300px] md:w-[427px] h-[463px] '>
                                <GroupsList></GroupsList>
                                <div className='mt-[20px] md:mt-[50px]'>
                                 <FriendRequest></FriendRequest>
                                </div>
                            </div>
                            <div className='w-[300px] md:w-[364px] h-[463px] mt-45 md:mt-0'>
                                <Friends></Friends>
                                <div className='mt-[20px]'>
                                    <MyGroup></MyGroup>
                                </div>
                            </div>
                            <div className='w-[300px] md:w-[364px] '>
                                <div className='overflow-y-scroll h-[430px] mt-75 md:mt-0'>
                                    <UserList></UserList>
                                </div>
                              
                              <div className='overflow-y-scroll h-[440px] mt-[30px]'>
                                <BlockedUsers></BlockedUsers>
                              </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center  items-center bg-gray-600 w-full h-screen'>
                        <div className='bg-red-200 px-[80px] py-[50px] rounded-2xl text-center w-[800px]'>
                            <h2 className='text-4xl text-primary font-bold mb-[20px]'> Please, Verify your email. </h2>
                            <p className='font-primary text-2xl font-semibold mb-6'>If you complete your email verification & Login again, You can go to our <span className='font-bold text-green-600'> Main page.</span></p>
                            <Link to="/login"> <button className='bg-primary text-white font-semibold md:text-[20px]  px-[20px] md:px-[50px] py-[8px] md:py-[10px] rounded-[10px] cursor-pointer transition-all duration-300 capitalize hover:bg-gray-500'>back to login</button></Link>
                        </div>
                    </div>
            }
        </>
    )
}

export default Inner