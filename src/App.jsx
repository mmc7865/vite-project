// // // const App = () => {

// // //   const clickHandler = () => {
// // //     console.log("Button Clicked")
// // //   };

// // //   const exploreMore = (message) => {
// // //     console.log(message);
// // //   };


// // //   return (
// // //     <div className="bg-red-100 p-9 w-[80%] text-5xl" >
// // //     <div>App</div>
// // //     {/* <h1>{import.meta.env.VITE_My_Name}</h1> */}
// // //     <button onClick={clickHandler} className="px-4 py-2 bg-red-300 rounded mt-5 text-2xl"> Non-Perametrized Button</button> <br />
// // //     <button className="px-4 py-2 bg-green-300 ml-5 text-2xl" onClick={() => exploreMore("Kch nhi hai")}>Perametrized Button</button> 
// // //     </div>
// // //   )
 
// // // }


// // // export default App
// // // //react has more powerful because of reconciliation it means if we have 500 pages and we updating anything in the one page then only one page is refresh or rerender
// // // //reconciliation has to terms it calls rerenderation and updation


// // import React from 'react'
// // import { useState } from 'react';

// // const App = () => {

// //   const [status, setstatus] = useState("Button Not Clicked");
// //   const ClickHandler = (msg) =>{
// //     setstatus(msg);
// //   };
// //   console.log(status)
// //   return (
// //     <div>
// //       <button onClick={ () =>ClickHandler("button clicked")}>
// //         click
// //       </button>
// //     </div>

// //   )
// // }

// // export default App



// import React, { useState, useEffect } from 'react';

// const App = () => {

// const Clock = () => {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timerId = setInterval(() => setTime(new Date()), 1000);

//         return () => clearInterval(timerId); // Cleanup interval on unmount
//     }, []);

//     return (
//         <div>
//             <h1>{time.toLocaleTimeString()}</h1>
//         </div>
//     );
// };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Clock />
//             </header>
//         </div>
//     );
// }

// export default App;







// const App = () => {

// const SubmitHandler =(e) => {
//   e.preventDefault();
//   const {fullname, username} = e.target;
//   const data ={
//     fullname: fullname.value,
//     username: username.value,
//   };
//   console.log(data);
//   // send the data to database....
// };


//   return (
//     <div className="mt-10 w-[80%] mx-auto p-10 rounded bg-zinc-200">
//       <h1 className="font-bold text-3xl underline mb-3">Form Handling</h1>
       
//           <form onSubmit={SubmitHandler}>
//             <input className="px-4 py-2 mx-3"placeholder="Full Name" type="text"name="fullname" />
//             <input className="px-4 py-2 m-3"placeholder="Username" type="text"name="username" />
//             <button className="px-4 py-2 bg-zinc-900 text-white mx-3">Submit</button>
//           </form>
    


//     </div>
//   )
// }

// export default App




import { useState } from "react";
const App = () => {

  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");


const SubmitHandler = (e) => {
  e.preventDefault();
  const data ={
    fullname,
    username,
  };
  console.log(data);
  // send the data to database....
};


  return (
    <div className="mt-10 w-[80%] mx-auto p-10 rounded bg-zinc-200">
      <h1 className="font-bold text-3xl underline mb-3">Form Handling</h1>
       
          <form onSubmit={SubmitHandler}>
            <input className="px-4 py-2 rounded mx-3"placeholder="Full Name" type="text"onChange={(e) => setfullname(e.target.value)} value={fullname} />
            <input className="px-4 py-2 rounded m-3"placeholder="Username" type="text"  value={username} onChange={(e) => {setusername(e.target.value); console.log(e.target.value)}}/>
            <button className="px-4 py-2 rounded bg-zinc-900 text-white mx-3">Submit</button>
          </form>
    


    </div>
  )
}

export default App