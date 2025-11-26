import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'

const Inner = () => {
    const db = getDatabase()
    const [friend, setFriend] = useState([])

    useEffect(() => {
        const friendRef = ref(db, "Friend/");

        onValue(friendRef, (snapshot) => {
          let arr = []
          snapshot.forEach((items) => {
           arr.push(items.val())
          })
          setFriend(arr);
        })
      }, [])
      console.log(friend," jfdaokalslkasljlkfjalkdjflajdslkjfklasfdjkjfwadoijuifqdhavcjk");
      

  return (
    <div>
        <h1>Firebase</h1>
        <h2>How to collect Data from Firebase</h2>
        <button>Click Me</button>
    </div>
  )
}
export default Inner