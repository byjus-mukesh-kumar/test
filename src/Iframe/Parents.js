import React from 'react'
import { useRef ,useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

export default function Parents() {

    const [testResults ,setTestResults]=useState(" ");
    useEffect(()=>{
        window.addEventListener("message",(e)=>{
            // if(e.origin !== 'http://localhost:3000') return;
            setTestResults(""+e.data);
        })
    },[]);

    // const iframeRef=useRef(null);
    // const sendMessage=()=>{
    //     if(!iframeRef.current) return;
    //     iframeRef.current.contentWindow.postMessage(
    //         "hi son",'http://localhost:3001/parent'

    //     );
    // }
    const downloadhandler=()=>{

    const link = document.createElement('a');
    link.download = 'test_result.json';
    link.href = URL.createObjectURL(
      new Blob([testResults], {
        type: 'application/json',
      })
    );
    link.click();
    }
  return (
    
    <div>
       I am parents.
       <br/>
       <button onClick={downloadhandler}>Download report</button>
       {/* {testResults}
       
       <a href='http://localhost:3001/child' target="_blank" rel="noreferrer">
       <button>click</button>
       </a>
       <button>click</button> */}
      
       <iframe
        //ref={iframeRef}
        src=' https://rtc-diagnostics-video-55mc3nvh-1571-dev.twil.io'
        width='600'
        height='600'
        title='child iframe'
        allow="camera;microphone"
        >
       </iframe>
    </div>
    
  
   
  )
}
