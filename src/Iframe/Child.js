import React from 'react'
import { useEffect } from 'react';
import { useState,useRef } from 'react'

export default function Child() {
 
    const iframeRef=useRef(null);

    const sendMessage=()=>{
       // if(!iframeRef.current) return;
        window.parent.postMessage(
            "hi dad",'http://localhost:3001/child'

        );
    }

    const [rMessage ,setreMessage]=useState("");
    useEffect(()=>{
        window.addEventListener("message",(e)=>{
            //if(e.origin !== 'http://localhost:3001/parent') return;
            setreMessage("data from parents :" +e.data);
        })
    },[]);

   
  return (
    <div>
       <h>child</h>
       <button onClick={sendMessage}>send mess</button>
       <p>{rMessage}</p>
    </div>
  )
}
