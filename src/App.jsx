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


import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


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
}