import { BsThreeDotsVertical } from "react-icons/bs";
import request2 from "../../../assets/friendrequest2.png"
import { TiPlus } from "react-icons/ti";
import { LuUserRoundCheck } from "react-icons/lu";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserList = () => {
    const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))
    // console.log(data);    
    const db = getDatabase();
    const [userList, setUserList] = useState([])
    const [disableRquest, setdisableRquest] = useState([])

    // All of registrated person will be add here as a user list except Login person
    useEffect(() => {
        const userRef = ref(db, "users");
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                if (data?.uid !== items?.key) {
                    arr.push({...items?.val(), userid: items?.key})
                }
            })
            setUserList(arr);
        })
    }, [])
    
    // When you send a friend request
    const handleSendRequest = (items) => {  
        // console.log(items);       
        set(push(ref(db, "Friend-Request/")), {
            senderName: data?.displayName,
            senderId: data?.uid,
            receiverName: items?.username,
            receiverId: items?.userid,
        })
    }

useEffect(() => {
      const requestRef = ref(db, "Friend-Request/");
           onValue(requestRef, (snapshot) => {
               let arr = []
               snapshot.forEach((items) => {
                arr.push(items.val().receiverId+items.val().senderId);
                //   console.log(items.val(), "Items");                  
               })
               setdisableRquest(arr);
           })
}, [])
// console.log(disableRquest, "hjdosfjlkaj");

    return (
        <div className="shadow-+[0px_4px_4px_0px] shadow-[#000000]/50  rounded-[20px] h-[451px] overflow-y-scroll">
            <div className='py-2 px-2 md:px-10 '>
                {/* heading */}
                <div className=' flex justify-between items-center'>
                    <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>User List</h2>
                    <BsThreeDotsVertical className='md:text-2xl' />
                </div>
                <div className=''>
                    {
                        userList.map((user) => (<div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[5px]'>
                            <div className='flex justify-between items-center space-x-[14px]'>
                                <img src={request2} alt="" className="size-12 md:size-auto" />
                                <div className='flex flex-col'>
                                    <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary'>{user?.username}</h2>
                                    <h3 className='font-third font-medium text-[8px] text-[#4D4D4D]/75'>{user?.email}</h3>
                                </div>
                            </div>
                            <div>
                                <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" >
                                    {
                                        disableRquest.includes(data?.uid+user.userid) ||
                                        disableRquest.includes(user.userid+data?.uid)
                                        ?
                                          <LuUserRoundCheck className="text-white" />
                                        :
                                          <TiPlus  className="text-white" onClick={() => handleSendRequest(user)} />
                                    }
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

export default UserList