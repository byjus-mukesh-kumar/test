import React from 'react'
import { useEffect } from 'react';
import { useState,useRef } from 'react'

export default function Child() {
 
    // const iframeRef=useRef(null);
    const data ={name:"mukesh",age:22}
    const sendMessage=()=>{
       // if(!iframeRef.current) return;
        const res=JSON.stringify(data);
        window.parent.postMessage(
            res
            // ,'http://localhost:3001/child'

        );
    }

    // const [rMessage ,setreMessage]=useState("");
    // useEffect(()=>{
    //     window.addEventListener("message",(e)=>{
    //         //if(e.origin !== 'http://localhost:3001/parent') return;
    //         setreMessage("data from parents :" +e.data);
    //     })
    // },[]);

   
  return (
    <div>
       <p>child</p>
       <button onClick={sendMessage}>send mess</button>
       {/* <p>{rMessage}</p> */}
    </div>
  )
}
