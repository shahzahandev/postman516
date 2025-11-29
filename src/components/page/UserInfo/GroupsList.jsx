import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import request1 from "../../../assets/friendrequest1.png"
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const GroupsList = () => {
    const db = getDatabase()
    const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))
    const [show, setShow] = useState(true)
    const [groupName, setGroupName] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [groupTagName, setGroupTagName] = useState("")
    const [tagErr, setTagErr] = useState("")
    const [groupList, setGroupList] = useState([])

    const handleGroupName = (e) => {
        setGroupName(e.target.value)
        setNameErr("")
    }
    const handleTagName = (e) => {
        setGroupTagName(e.target.value)
        setTagErr("")
    }
    useEffect(() => {
        const groupRef = ref(db, "GroupList/");
        onValue(groupRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                if(data?.uid != items.val().groupCreatorId){
                   arr.push(items.val());
                }
            })
            setGroupList(arr);
        })
    }, [])

    const handleGroup = (items) => {
        if (!groupName) {
            setNameErr("Please, Enter your group name here");
        }
        if (!groupTagName) {
            setTagErr("Please, Enter your group heading here")
        }
        if (groupName && groupTagName) {
            set(push(ref(db, "GroupList/")), {
                groupName: groupName,
                groupTagName: groupTagName,
                groupCreatorId: data?.uid,
                groupCreatorName: data?.displayName
            })          
            toast.success("Your Group Created Successful.");
            setTimeout(() => {
                setShow(!show)   
            }, 2500)
        }
    }
  
    return (
        <div className='bg-linear-to-r/srgb from-[#e7ed6b] to-[#1dc4e2] py-2 px-3 md:px-10 shadow-[0px_4px_4px_0px] shadow-[#000000]/25  rounded-[20px] h-[451px] overflow-y-scroll pt-[10px] md:pt-[20px]'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLosss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            {/* heading */}
            <div className='mt-[-10px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Groups List</h2>
                    <div>
                        {
                            show ?
                                <button
                                    onClick={() => setShow(!show)} className='font-third font-semibold text-[10px] md:text-[12px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Create Group</button>
                                :
                              "" 
                        }
                    </div>
                    <BsThreeDotsVertical className='md:text-2xl' />
                </div>
            </div>

            <div className=''>
                {
                    show
                        ?
                        <div className=''>
                           {
                            groupList.map((user) => (
                                 <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  md:px-[5px]'>
                                <div className='flex justify-between items-center space-x-[14px]'>
                                    <img src={request1} alt="" className='size-12 md:size-auto' />
                                    <div className='flex flex-col'>
                                        <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>{user.groupName}</h2>
                                        <h3 className='font-third font-medium text-[11px] md:text-[14px] text-[#4D4D4D]/75'>{user.groupTagName}</h3>
                                    </div>
                                </div>
                                <div>
                                    <button className='font-third font-semibold text-[14px] md:text-[20px] text-[#FFFFFF] py-[2px] px-2 md:px-[8px] bg-secondary rounded-[10px] transition-all duration-300 cursor-pointer hover:bg-green-700'>Join</button>
                                </div>
                            </div>
                            ))
                           }
                        </div>
                        :
                        <div className='font-medium font-primary bg-primary  absolute md:top-[60px] left-[100px] md:left-[280px] mt-6 w-[300px] md:w-[1235px] pt-[50px] md:pt-[150px] pb-[50px] md:pb-[150px] rounded-2xl'>
                            <div className='px-2 py-2  flex flex-col space-y-[20px] md:space-y-[30px] items-center'>
                                <div className='relative'>
                                    <input onChange={handleGroupName} className='w-[250px] md:w-[1035px] rounded-[50px] px-5 md:px-[50px] py-2 md:py-[20px] text-[12px] md:text-[24px] text-primary bg-gray-100 border-none' type="text" placeholder='Give your group name here' />
                                    <p className='absolute bottom-[-15px] md:bottom-[-22px] left-[0px] pl-[20px] text-[10px] md:text-[16px] text-red-500 w-full'>{nameErr}</p>
                                </div>
                                <div className='relative'>
                                    <input onChange={handleTagName} className='w-[250px] md:w-[1035px] rounded-[50px] px-5 md:px-[50px] py-2 md:py-[20px] text-[12px] md:text-[24px] text-primary bg-gray-100  border-none' type="text" placeholder='Give your group title here' />
                                    <p className='absolute bottom-[-15px] md:bottom-[-22px] left-[0px] pl-[20px] text-[10px] md:text-[16px] text-red-500 w-full'>{tagErr}</p>
                                </div>
                                <div> 
                                         <button
                                                onClick={handleGroup}
                                                className=' mt-[20px] w-[250px] md:w-[1035px]  font-third font-semibold text-[12px] md:text-[20px] text-[#FFFFFF] px-2 md:px-[50px] py-2 md:py-[20px] bg-linear-to-r/srgb from-[#ec5a92] to-[#ee9068] rounded-[50px] transition-all duration-300 cursor-pointer'>Create a Group
                                            </button>                                  
                                </div>
                                <button
                                    onClick={() => setShow(!show)} className='w-[250px] md:w-[1035px]  font-third font-semibold text-[12px] md:text-[20px] text-[#FFFFFF] px-2 md:px-[50px] py-2 md:py-[20px] bg-linear-to-r/srgb from-[#ec5a92] to-[#ee9068] rounded-[50px] transition-all duration-300 cursor-pointe'>Back</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default GroupsList
