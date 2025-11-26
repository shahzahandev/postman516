import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import InnerSlider from './InnerSlider'
import GroupsList from './UserInfo/GroupsList'
import Friends from './UserInfo/Friends'
import UserList from './UserInfo/UserList'
import FriendRequest from './UserInfo/FriendRequest'
import MyGroup from './UserInfo/MyGroup'
import BlockedUsers from './UserInfo/BlockedUsers'
import EmailVerified from './EmailVerified'

const Inner = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const data = useSelector((state) => state.userInfo.value)
    const [verify, setVerify] = useState(false)
    const [loadding, setLoadding] = useState(true)

    useEffect(() => {
     if(!data){
        navigate ("/")
    }
    })

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

    return (
        <>
            {
                verify ?
                    <div className='bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] flex pt-4 md:pt-[35px] space-x-5 overflow-x-hidden'>
                        <InnerSlider active="homepage"></InnerSlider>
                        <div className='flex flex-col md:flex-row ml-25 md:ml-[280px] space-x-10'>
                            <div className='flex flex-col w-[300px] md:w-[427px]'>
                                <GroupsList></GroupsList>
                                <div className='mt-[20px] md:mt-[40px]'>
                                 <FriendRequest></FriendRequest>
                                </div>
                            </div>
                            <div className='w-[300px] md:w-[364px] mt-4 md:mt-0'>
                                <Friends></Friends>
                                <div className=''>
                                    <MyGroup></MyGroup>
                                </div>
                            </div>
                            <div className='w-[300px] md:w-[364px] '>
                                <div className='mt-5 md:mt-0'>
                                    <UserList></UserList>
                                </div>
                              <div className='md:mt-[20px]'>
                                <BlockedUsers></BlockedUsers>
                              </div>
                            </div>
                        </div>
                    </div>
                    :
                  (
                    <EmailVerified></EmailVerified>
                  )
            }
        </>
    )
}

export default Inner