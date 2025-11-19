import { BsThreeDotsVertical } from "react-icons/bs";
import request3 from "../../../assets/friendrequest3.png"
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BlockedUsers = () => {
    const db = getDatabase()
    const [blockList, setBlockList] = useState([])
    const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))

    useEffect(() => {
        const blockRef = ref(db, "Blocklist/");
        onValue(blockRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                if (data?.uid == items.val().receiverId || data?.uid == items.val().senderId) {
                    arr.push({ ...items.val(), userId: items.key })
                }
            })
            setBlockList(arr);
        })
    }, [])

    const handleBlock = (items) => {
        console.log("blkeock");
        set(push(ref(db, "UnBlockList/")), {
            ...items
        }).then(() => {
            remove(ref(db, "Blocklist/"))
        })
    }

    return (
        <div>
            <div className='py-2 px-4 md:px-10 shadow-[0px_4px_4px_0px] shadow-[#000000]/50  rounded-[20px] h-[451px] overflow-y-scroll mt-5 md:mt-10'>
                <div className=' flex justify-between items-center'>
                    <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Blocked Users</h2>
                    <BsThreeDotsVertical className='md:text-2xl' />
                </div>
                <div className=''>
                    {
                        blockList.map((user) => (
                            <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3 px-[5px]'>
                                <div className='flex justify-between items-center space-x-[14px]'>
                                    <img src={request3} alt="" className="size-12 md:size-auto" />
                                    <div className='flex flex-col'>
                                        <h2 className='font-third font-semibold  text-[12px] md:text-[14px] text-secondary'>
                                            {
                                                data?.uid == user.senderId ? user.receiverName : user.senderName
                                            }
                                        </h2>
                                        <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</h3>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleBlock(user)}
                                        className="text-[12px] md:text-[14px] py-[2px] md:py-[4px] px-[8px]  rounded-[5px] bg-secondary text-white  font-bold transition-all duration-300 hover:bg-green-600" >Unblock
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlockedUsers