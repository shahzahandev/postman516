import { BsThreeDotsVertical } from "react-icons/bs";
import request3 from "../../../assets/friendrequest3.png"
import { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";

const Friends = () => {
  const db = getDatabase()
  const [friendList, setFriendList] = useState([])
  const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))

  //Getting data from Friend Collection for show friend list......
  useEffect(() => {
    const friendRef = ref(db, "Friend/");
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((items) => {
        // If user with receiver Id & sender Id, push to array.....
        if (data?.uid == items.val().receiverId || data?.uid == items.val().senderId) {
          arr.push({ ...items.val(), userId: items.key })
        }
      })
      setFriendList(arr);
    })
  }, [])

  const handleBlockFriend = (items) => {
    set(push(ref(db, "Blocklist/")), {
      blockedBy: data?.displayName,
      blockedById: data?.uid,
      blockPerson: items.senderName,
      blockPersonId: items.userId,
    }).then(() => {
      //remove the old friend request collection for database....
      remove(ref(db, "Friend/" + items.userId))
    })
  }

  return (
    <div>
      <div className=' bg-linear-to-r/srgb from-[#e7ed6b] to-[#1dc4e2] py-2 px-5 md:px-[22px] rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/25 h-[451px] overflow-y-scroll'>
        <div className='flex justify-between items-center'>
          <h2 className='font-third font-semibold md:text-[20px] leading-auto text-secondary'>Friends</h2>
          <BsThreeDotsVertical className='md:text-2xl' />
        </div>
        <div className=''>
          {
            friendList.map((user) => (
              <div className='flex justify-between items-center mt-[18px] border-b-2 border-bg-black/50 pb-3  px-[5px]'>
                <div className='flex justify-between items-center space-x-[14px]'>
                  <img src={request3} alt="" className="size-12 md:size-auto" />
                  <div className='flex flex-col'>
                    <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>
                      {
                        data?.uid == user.senderId ? user.receiverName : user.senderName
                      }
                    </h2>
                    <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Now, your new Friend</h3>
                  </div>
                </div>
                <div>
                  <button onClick={() => handleBlockFriend(user)}
                    className="text-[12px] md:text-[14px] py-[2px] md:py-[4px] px-[8px]  rounded-[5px] bg-secondary text-white  font-bold transition-all duration-300 hover:bg-green-600" >Block
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

export default Friends