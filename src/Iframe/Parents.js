import React from 'react'
import { useRef ,useEffect,useState } from 'react'

export default function Parents() {

    const [rMessage ,setreMessage]=useState("");
    useEffect(()=>{
        window.addEventListener("message",(e)=>{
            //if(e.origin !== 'http://localhost:3001/parent') return;
            setreMessage("data from child :" +e.data);
        })
    },[]);

    // const iframeRef=useRef(null);
    // const sendMessage=()=>{
    //     if(!iframeRef.current) return;
    //     iframeRef.current.contentWindow.postMessage(
    //         "hi son",'http://localhost:3001/parent'

    //     );
    // }
  return (
    
    <div>
       I am parents.
       <br/>
       {/* <button onClick={sendMessage}>send message</button> */}
       <br/>
      
       <br/>
       <p>{rMessage}</p>
       <iframe
        //ref={iframeRef}
        src='http://localhost:3000'
        width='600'
        height='300'
        title='child iframe'
        >
       </iframe>
    </div>
    
  
   
  )
}
