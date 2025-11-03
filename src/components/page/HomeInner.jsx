import React from 'react'
import FriendRequest from './FriendRequest'
const HomeInner = () => {
  return (
    <div>
           <div className='flex flex-col space-y-[-50px]'>
                     <div className='flex justify-end'>
                            <FriendRequest></FriendRequest>
                            <FriendRequest></FriendRequest>
                            <FriendRequest></FriendRequest>                  
                    </div>
                     <div className='flex justify-end'>
                            <FriendRequest></FriendRequest>
                            <FriendRequest></FriendRequest>
                            <FriendRequest></FriendRequest>                  
                    </div>
                   </div>
    </div>
  )
}

export default HomeInner