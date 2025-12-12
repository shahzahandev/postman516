import { BsThreeDotsVertical } from "react-icons/bs";
import InnerSlider from '../../InnerSlider'
import request3 from "../../../../assets/friendrequest3.png"
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref} from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import ChatBox from './ChatBox';
import { activeInfo } from "../../../../slices/activeSlice";

const Message = () => {

  const dispatch = useDispatch()
  const db = getDatabase()
  const [friendListm, setFriendListm] = useState([])
  const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))

  // for showing userlist information
  useEffect(() => {
    const friendRef = ref(db, "Friend/");
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((items) => {
        if (data?.uid == items.val().receiverId || data?.uid == items.val().senderId) {
          arr.push({ ...items.val(), userId: items.key })
        }
      })
      setFriendListm(arr);
    })
  }, [])
 // for send user information to Redux. When you clicked a sigle user.
  const handleFriendMessage = (user) => {
    if(data?.uid == user.senderId){
      dispatch(activeInfo({
        name: user.receiverName,
        id: user.receiverId
      }))
    } else{
      dispatch(activeInfo({
        name: user.senderName,
        id: user.senderId
      }))
    }
  }

  return (
    <div className='relative bg-linear-to-r/srgb from-[#ee9068] to-[#ec5a92] flex pt-4 md:pt-[35px] overflow-y-hidden'>
      <div className=''>
        <InnerSlider active = "message" className="pb-6"></InnerSlider>
      </div>
        <div className='md:flex md:space-x-[30px] space-y-5 ml-25 md:ml-[280px] pb-60'>
          <div className='w-[300px] md:w-[440px]'>
              <div className='bg-linear-to-r/srgb from-[#b5ee65] to-[#c5f37c] py-2 px-5 md:px-[22px] rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/25 h-[451px] md:h-[700px] overflow-y-scroll'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-third font-semibold text-[12px] md:text-[20px] leading-auto text-secondary'>Send a message to your Friends</h2>
                  <BsThreeDotsVertical className='md:text-2xl' />
                </div>
                <div className=''>
                  {/* User List for Message Option.It's  UserList Copy. Just one change, that is Message button----------------------*/}
                  {
                    friendListm.map((user) => (
                      <div className='flex justify-between items-center mt-[18px] pb-1 px-[5px]'>
                        <div className='flex justify-between items-center space-x-[14px]'>
                          <img src={request3} alt="" className="size-12 md:size-auto" />
                          <div className='flex flex-col'>
                            <h2 className='font-third font-semibold text-[12px] md:text-[14px] text-secondary'>
                              {
                                data?.uid == user.senderId ? user.receiverName : user.senderName
                              }
                            </h2>
                            <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Start talking</h3>
                          </div>
                        </div>
                        <div>
                          <button onClick={() => handleFriendMessage(user)}
                            className="text-[12px] md:text-[14px] py-[2px] md:py-[4px] px-[8px]  rounded-[5px] bg-secondary text-white  font-bold transition-all duration-300 hover:bg-[#75a107]" >Message
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
                {/* Import chatBox for showing Message--------------*/}
           <div className="">
            <ChatBox></ChatBox>
           </div>
        </div>
    </div>
  )
}

export default Message