import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import request3 from "../../../../assets/friendrequest3.png"
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import moment from 'moment/moment';
import EmojiPicker from 'emoji-picker-react';

const ChatBox = () => {
  const db = getDatabase()
  const data = useSelector((Selector) => (Selector?.userInfo?.value?.user))
  const activeData = useSelector((state) => state?.activeChatInfo?.value)
  // console.log(activeData);
  const [msg, setMsg] = useState("")
  const [msgList, setMsgList] = useState([])
  const [msgErr, setMsgErr] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)

  const handleMsg = () => {
    // console.log(msg);
     if(!msg){
      setMsgErr("Must write something")
    } else{
   set(push(ref(db, "msg/")), {
      senderId: data?.uid,
      senderName: data?.displayName,
      receiverId: activeData?.id,
      receiverName: activeData?.name,
      message: msg,
      date: moment().format(),
    })
    }
    setShowEmoji(false)

  }

  const messageValue = (e) => {
    setMsg(e.target.value)
    setMsgErr("")
  }

  useEffect(() => {
    const messageRef = ref(db, "msg/");
    onValue(messageRef, (snapshot) => {
      let arr = []
      snapshot.forEach((items) => {
        if ((data?.uid == items.val().senderId && activeData.id == items.val().receiverId) ||
      (data?.uid == items.val().receiverId && activeData.id == items.val().senderId))
        arr.push(items.val());
      })
      setMsgList(arr);
    })
  }, [activeData.id])

  const handleEmoji = (emoji) => {
    console.log("eee", emoji.emoji);
    setMsg( msg+emoji.emoji )
      
  }

  return (
      <div className='w-[300px] md:w-[727px] h-[700px] bg-linear-to-r/srgb from-[#b5ee65] to-[#c5f37c] px-6 py-5 rounded-[20px] shadow-[0px_4px_4px_0px] shadow-[#000000]/50 overflow-hidden'>
          <div className=' flex justify-between items-center border-b-2 border-bg-black/50 pb-3 pt-[18px]'>
          <div className='flex justify-between items-center space-x-[14px]'>
            <img src={request3} alt="" className="size-12 md:size-auto" />
            <div className='flex flex-col'>
              <h2 className='font-third font-semibold text-[12px] md:text-[18px] text-secondary w-[120px] md:w-full'>
                {
                  activeData ?
                    <p>{activeData.name}</p>
                    :
                    <p>Unknown</p>
                }
              </h2>
              <h3 className='font-third font-medium text-[10px] text-[#4D4D4D]/75'>Online</h3>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical className='md:text-2xl' />
          </div>
        </div>
          {/* Sender & Receiver Message content.................*/}
        <div className='mt-5 z-[1] '>
          <div className='w-full h-[490px] md:h-[450px] px-5 py-2 overflow-y-scroll'>
           {
            msgList.map((items) => (
              data?.uid == items.senderId ?
              //  Sender Message----------------------------
                <div className='font-third font-medium text-end mt-2'>
                  <div className='relative'>
                    <h2 className='bg-[#9bd507] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[10px] md:text-[16px] text-primary'>{items.message}</h2>
                    <div className='absolute bottom-[10px] md:bottom-[18px] right-[-5px] text-[#9bd507] '><TbTriangleFilled /></div>
                    <p className='text-[8px] md:text-[12px] text-[#000000]/50 md:mt-[2px]'>{moment(items.date).fromNow()}</p>
                  </div>
                </div> :
              //  Receiver Message----------------------------
                <div className='font-third font-medium mt-2 md:mt-[20px]'>
                  <div className='relative'>
                 <div className=''>
                     <h2 className='bg-[#9bd507] inline-block px-[20px] md:px-[32px] py-[5px] md:py-[13px] rounded-[10px] text-[10px] md:text-[16px] text-primary'>{items.message}</h2>
                    <div className='absolute bottom-[12px] md:bottom-[18px] left-[-5px] text-[#9bd507] '><TbTriangleFilled /></div>
                 </div>
                    <p className='text-[8px] md:text-[12px] text-[#000000]/50 mt-[2px]'>{moment(items.date).fromNow()}</p>
                  </div>
                </div>
            ))
          }
          </div>
          <div className='relative flex space-x-2 items-center mt-[25px]'>
          {
            showEmoji &&
              <div className='absolute right-[-20px] bottom-[-65px] md:bottom-[55px] md:left-0 scale-50 md:scale-100 '>
               <EmojiPicker className='' onEmojiClick={(e) => handleEmoji(e)}/>
            </div>
          }
            <div className=' flex items-center justify-between bg-[#eef8cb] rounded-[5px] px-5 py-2 w-full shadow-2xl cursor-pointer'>
              <div className='relative'>
                <input onChange= {messageValue}
                value={msg}
                type="text" 
                placeholder='write your message here' 
               className=' md:w-[480px] font-semibold text-[10px] md:text-[16px] py-2 rounded-[5px] outline-0 cursor-pointer' />
                <p className='absolute bottom-[-5px] font-semibold text-[6px] md:text-[12px] text-red-400'>{msgErr}</p>
              </div>
              <div className='flex space-x-2'>
                <MdOutlineCameraAlt className='text-[16px] md:text-2xl transition-all delay-100 hover:text-[#75a107]' />
               <div onClick={(e) => setShowEmoji(!showEmoji)}>
                 <IoMdHappy className='text-[16px] md:text-2xl transition-all delay-100 hover:text-[#75a107]' />
               </div>
              </div>
            </div>
            {/* handle message button */}
            <div onClick={handleMsg}
              className=' cursor-pointer p-4 rounded-[15px] bg-secondary hover:bg-[#75a107] hover:rounded-[5px] transition-all delay-100'>
              <CiLocationArrow1 className='text-white text-[16px] md:text-2xl font-bold' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatBox