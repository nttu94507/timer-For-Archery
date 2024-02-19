"use client";
import Image from 'next/image'
import {  useEffect, useState } from "react";
import './globals.css'

export default function Home() {
  
    const [turn, setTurn] = useState(6)
  const [secend, setSecend] = useState(180);
  const [reciprocal, setR] = useState(180);
  const [start, setStart] = useState(false);

  let timet

  useEffect(() => {
    if (!start) {
      return
    }
     timet = setInterval(() => {
    
      console.log(reciprocal)
      setR(reciprocal => reciprocal - 1)
    }, 1000)
    // console.log(reciprocal)

    return () => clearInterval(timet)
  }, [start])


  useEffect(()=>{
    if (reciprocal === 0 ){
      setStart(false)
      const audio = new Audio('shrill_whistle6.mp3')
      audio.play()
      // setTimeout(() => {
      //   audio.play()
      // }, 500);
      
      // sleep(1)
    } 
  },[reciprocal])

  // const audioplay =()=>{
  //   createElement('audio,')
  // }



  return (
    <div className="center">
      <div className="fontSize">{reciprocal} </div>
      <div className="display">
        <div className="btn" onClick={() => {
          setStart(true)
          const audio = new Audio('shrill_whistle6.mp3');
          audio.play();
        }}>Click</div>
        <div className="btn" onClick={() => {
          setStart(false)
        }}>Stop</div>
        <div className="btn" onClick={() => {
          setR(secend)
        }}>ReSet</div>
        {/* <audio src="shrill_whistle6.mp3"></audio> */}
      </div>

      {/* <input type="text" name="Turn" id="" onChange={(e) => {
        setTurn(e.target.value)
      }} />
      <input type="text" name="Turn" id="" onChange={(e) => {
        setSecend(e.target.value)
      }} /> */}

      {/* <div onClick={() => {
        clock()
      }}>倒數開始</div> */}
    </div>

  )
    
  
}
