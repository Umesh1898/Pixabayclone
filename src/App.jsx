/*import React from 'react'
import Project from './Project'
const App = () => {
  return (
    <div>
      <Project/>
    </div>
  )
}

export default App*/


/*import {Component } from "react";
export default class App extends Component{
  constructor(){
    super()
    this.state={count:0,color:"red"}
  }
  change(){
    this.setState({count:this.state.count+1})
  }
  color(){
    this.setState({color:"green"})
  }
  render(){
    return(
      <div>
        <h1 style={{color:`${this.state.color}`}}>{this.state.count}</h1>
        <button onClick={()=>this.change()}>+</button>
        <button onClick={()=>this.color()}>color</button>
      </div>
    )
  }
}*/



/*import { useEffect } from "react";
const App=()=>{
  useEffect(()=>{
    let a=document.getElementById('btn1')
    a.addEventListener('click',()=>{
      window.print()
    })
  })
  return(
    <div>
    <button id='btn1'>Click</button>
    </div>
  )
}
export default App*/




/*import { useEffect,useState } from "react"
const App=()=>{
  const[data,setdata]=useState([])
  useEffect(()=>{
    fetch=("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then((d)=>setdata(d))
  },[data])
  return(
    <div className="fetch">
      {data && Date.map((x)=>{
        return(
          <section key={x.id}>
            <p>{x.name} <span>{x.email}</span></p>
            <p>{x.address.zipcode}</p>

          </section>
        )
      })}
    </div>
    )
}
export default  App*/  

/*import { useEffect,useState } from "react";
const App=()=>{
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(d=>setData(d))
  },[data])
  return(
    <div>
      <center><input type={'search'} onChange={(e)=>setSearch(e.target.value)} /></center>
      {data.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
        return(
          <section key={item.id}>
            <center><p>{item.name}</p></center>
          </section>
        )
      })}
    </div>
  )
}
export default App*/

/*import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App*/


/*import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}


export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
      const roomID = getUrlParams().get('roomID') || randomID(5);
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 707368781;
      const serverSecret = "c9a09f67319f305aa261027333b5a912";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}*/


//memoization//

// 

//usememo()//

// import { useState,useMemo } from "react";
// const App=()=>{
//   const[count,setcount]=useState(0)
//   const power=()=>{
//     return count**2
//   }
//   const memo=useMemo(()=>power(count))
//   return(
//     <div>
//       <h1>count:{count}</h1>
//       <h1>power:{memo}</h1>
//       <button onClick={()=>setcount(count+1)}>+</button>
//     </div>
//   )
// }
// export default App

// import { useState,useRef,useEffect } from "react";
// const App=()=>{
//   const[name,setName]=useState("")
//   const count=useRef(0)
//   useEffect(()=>{
//     return()=>{
//       count.current=count.current+1
//     }
//   },[name])
//   return(
//     <div>
//       <input type="text" onChange={(e)=>setName(e.target.value)} />
//       <h1>My Name is:{name} </h1>
//       <h1>count:{count.current}</h1>
//     </div>
//   )
// }
// export default App

// import React, { useState, useRef } from 'react';

// function App() {
//   const inputRef = useRef(null);
//   const boxRef = useRef(null);
//   const [inputValue, setInputValue] = useState('');

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleTarget = () => {
//     boxRef.current.innerText = inputValue;
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Type something..."
//         onChange={handleInputChange}
//       />
//       <button onClick={handleFocus}>Focus Input</button>
//       <button onClick={handleTarget}>Target Box</button>
//       <div ref={boxRef} style={{ marginTop: '20px', border: '1px solid black', padding: '10px' }}>
      
//       </div>
//     </div>
//   );
// }

// export default App

//CAMERA OPEN DEMO//

// import React, { useEffect, useRef } from 'react';

// function CameraComponent() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Function to start the webcam stream
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error('Error accessing webcam:', error);
//       }
//     };

//     startWebcam();

//     // Function to stop the webcam when the component unmounts
//     return () => {
//       if (videoRef.current) {
//         const stream = videoRef.current.srcObject;
//         if (stream) {
//           const tracks = stream.getTracks();
//           tracks.forEach(track => track.stop());
//         }
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Camera Component</h1>
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// }

// export default CameraComponent;



//VIDEO PLAY DEMO//

// import React, { useState,useRef } from 'react';
// import Video from './Video/video.mp4'
// function App(){
//   const[playing,setPlaying]=useState(false);
//   const ref=useRef(null);

//   function handleClick(){
//     const nextIsPlaying=!playing;
//     setPlaying(nextIsPlaying);

//     if(nextIsPlaying){
//       ref.current.play();
//     }else{
//       ref.current.pause();
//     }
//   }
//   return(
//     <>
//     <button onClick={handleClick}>{playing ? 'Pause':'Play'}</button>
//     <video src={Video} height={'500px'} width='100%' ref={ref} onPlay={()=>setPlaying(true)}></video>
//     </>
//   );
// }
// export default App



// import React, { useState, useRef } from 'react';

// const VideoPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div>
//       <video ref={videoRef} width="640" height="360" controls>
//         <source src="./Video/video.mp4" type="video/mp4" />
//       </video>
//       <button onClick={togglePlay}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>


//       <video ref={videoRef} width="640" height="360" controls>
//       <source src="./Video/Spiderman.mp4" type="video/mp4" />
//       </video><br />
//       <button onClick={togglePlay}>
//         {isPlaying ? 'Pause1' : 'Play1'}
//       </button>


//     </div>
//   );
// };

// export default VideoPlayer;


// import React from 'react';
// import './App.css';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import FacebookLogo from './FacebookLogo';

// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>

//       <div id="home">
//         <Home />
//       </div>

//       <div id="about">
//         <About />
//       </div>

//       <div id="projects">
//         <Projects />
//       </div>

//       <div id="contact">
//         <Contact />
//       </div>

//       <footer>
//         <FacebookLogo />
//       </footer>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from 'react'
// // import './App.css'
// // import Navbar from './Navbar.jsx'

// const App = () => {

//   const [data, setData] = useState([])
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     fetch(`https://pixabay.com/api/?key=40363756-160f89c7768a2a4e2b0888016&q=${search}&image_type=photo&pretty=true`)
//       .then(res => res.json())
//       .then(d => setData(d.hits))
//   }, [data])

//   return (
//     <div className="App">
//       <Navbar />
//       <center><input type="text" onChange={(e) => setSearch(e.target.value)}></input></center>
//       {data.map((x) => {
//         return (
//           <section key={x.type} className="secimg">
//             <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
//           </section>
//         )
//       })}
//     </div>
//   )
// }

// export default App



// import { useEffect, useState } from 'react'
// import Navbar from './Pixabay2.0/Navbar.jsx'

// const App = () => {

//   const [data, setData] = useState([])
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     fetch(`https://pixabay.com/api/?key=40363756-160f89c7768a2a4e2b0888016&q=${search}&image_type=photo&pretty=true`)
//       .then(res => res.json())
//       .then(d => setData(d.hits))
//   }, [data])

//   return (
//     <div className="App">
//       <Navbar />
//       <center><input type="text" onChange={(e) => setSearch(e.target.value)}></input></center>
//       {data.map((x) => {
//         return (
//           <section key={x.type} className="secimg">
//             <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
//           </section>
//         )
//       })}
//     </div>
//   )
// }

// export default App


import { useEffect, useState } from 'react'
import Navbar from './New_folder/Navbar'

const App = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=40363756-160f89c7768a2a4e2b0888016&q=${search}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(d => setData(d.hits))
  }, [data])

  return (
    <div className="App">
      <Navbar />
      <center><input type="text" onChange={(e) => setSearch(e.target.value)}></input></center>
      {data.map((x) => {
        return (
          <section key={x.type} className="secimg">
            <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
          </section>
        )
      })}
    </div>
  )
}

export default App


// import React,{useReducer} from 'react'

// const App = () => {
//   const initialState=0
//   const[count,dispatch]=useReducer(reducer,initialState)
//   function reducer(state,action){
//     switch(action){
//       case "incre":
//       return state+1

//       case "decre":
//         return state-1 
//         default:
//           return state
//     }
//   }
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={()=>dispatch("incre")}>+</button>
//       <button onClick={()=>dispatch("decre")}>-</button>
//     </div>
//   )
// }

// export default App
