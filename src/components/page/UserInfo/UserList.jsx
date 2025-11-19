import { BsThreeDotsVertical } from "react-icons/bs";
import request2 from "../../../assets/friendrequest2.png"
// import { LuUserRoundCheck } from "react-icons/lu";
// import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserList = () => {
    const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))
    const db = getDatabase();
    const [userList, setUserList] = useState([])
    const [disableRquest, setdisableRquest] = useState([])
    const [friendList, setFriendList] = useState([])
    const [blockList, setBlockList] = useState([])

    // All of registrated person will be add here as a user list except Login person
    useEffect(() => {
        const userRef = ref(db, "users");
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                if (data?.uid !== items?.key) {
                    arr.push({ ...items?.val(), userid: items?.key })
                }
            })
            setUserList(arr);
        })
    }, [])

    // Create a new friend request collection in database.
    const handleSendRequest = (items) => {
        set(push(ref(db, "FriendRequest/")), {
            senderName: data?.displayName,
            senderId: data?.uid,
            receiverName: items?.username,
            receiverId: items?.userid,
        })
    }

    useEffect(() => {
        const requestRef = ref(db, "FriendRequest/");
        onValue(requestRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                arr.push(items.val().receiverId + items.val().senderId);
                //   console.log(items.val(), "Items");                  
            })
            setdisableRquest(arr);
        })
    }, [])

    useEffect(() => {
        const friendRef = ref(db, "Friend/");
        onValue(friendRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                // If user with receiver Id & sender Id, push to array.....
                arr.push(items.val().receiverId + items.val().senderId);
            })
            setFriendList(arr);
        })
    }, [])

    useEffect(() => {
        const blockRef = ref(db, "Blocklist/");
        onValue(blockRef, (snapshot) => {
            let arr = []
            snapshot.forEach((items) => {
                arr.push(items.val().receiverId + items.val().senderId);
            })
            setBlockList(arr);
        })
    }, [])

    return (
        <div className="shadow-[0px_4px_4px_0px] shadow-[#000000]/50  rounded-[20px] h-[451px] overflow-y-scroll">
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
                                    <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>{user?.username}</h2>
                                    <h3 className='font-third font-medium text-[6px] text-[#4D4D4D]/75'>{user?.email}</h3>
                                </div>
                            </div>
                            <div>
                                <button className="text-[20px] py-[5px] px-[4px] bg-secondary rounded-[5px] transition-all duration-300 hover:bg-green-600" >
                                    {
                                        friendList.includes(data?.uid + user.userid) ||
                                            friendList.includes(user.userid + data?.uid) ?
                                            // ( <FaUserAlt className="text-white" />)
                                            <p className="text-white font-medium text-[8px] w-[50px]">Friend</p>
                                            :
                                            disableRquest.includes(data?.uid + user.userid) ||
                                                disableRquest.includes(user.userid + data?.uid)
                                                ?
                                                // <LuUserRoundCheck className="text-white" /> 
                                                <p className="text-white font-medium text-[8px] w-[50px]">Requested</p>
                                                :

                                                blockList.includes(data?.uid + user.userid) ||
                                                    blockList.includes(user.userid + data?.uid)
                                                    ?
                                                    (<p className="text-white font-medium text-[8px] w-[50px]">Blocked</p>)
                                                    :
                                                    (<p className="text-white font-medium text-[8px] w-[50px]" onClick={() => handleSendRequest(user)}>Add Friend</p>)
                                        // <FaUserPlus className="text-white" onClick={() => handleSendRequest(user)} />                                          
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