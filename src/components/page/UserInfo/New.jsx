// import React from 'react'
// import { getDatabase, push, ref, set } from 'firebase/database';

// const InnerPage = () => {
//     const db = getDatabase();

//     const handleData = () => {
//         set(push(ref(db, "Data Collection/")),{
//             senderName: "Shahzahan Siraj",
//             senderId: 110,
//             receiverName: "Mostafizur",
//             receiverId: 999,
//         })
//     }

//   return (
//     <div>
//         <h1>Firebase</h1>
//         <h2>How to send Data in DataBase</h2>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio illo vero harum porro voluptatum doloribus facilis, est repudiandae. Qui c dolorem fugiat, dolores blanditiis veritatis? Fugiat, laudantium et odio sapiente quibusdam iste illo. Nam eius magnam, animi facilis doloribus incidunt optio voluptates iure repudiandae?</p>
//         <button onClick={handleData}>Click Me</button>
//     </div>
//   )
// }

// export default InnerPage