"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import './globals.css'
import Head from 'next/head'

export default function Home() {

  const [turn, setTurn] = useState(6)
  const [secend, setSecend] = useState(180);
  const [reciprocal, setR] = useState(10);
  const [start, setStart] = useState(false);
  const [audio, SetAudio] = useState("");
  // const audio = new Audio('shrill_whistle6.mp3')

  let timet

  useEffect(() => {
    if (!start) {
      return
    }
    timet = setInterval(() => {

      // console.log(reciprocal)
      setR(reciprocal => reciprocal - 1)
    }, 1000)
    // console.log(reciprocal)

    return () => clearInterval(timet)
  }, [start])

  useEffect(() => {
    if (reciprocal === 0) {
      setStart(false)
      audio.play()
    } else {
      return
    }

    // console.log(777)
  }, [reciprocal])


  useEffect(() => {
    SetAudio(new Audio("shrill_whistle6.mp3"));
  }, []);


  return (
    <div className="center">
      {/* <iframe src="silence.mp3" allow="autoplay" id="audio" className="aduio"></iframe> */}
      <div className="fontSize">{reciprocal} </div>
      <div className="fontSize">{start ? 1 : 0} </div>
      <div className="display">
        <div className="btn" onClick={() => {
          setStart(true)
          // const audio = new Audio('shrill_whistle6.mp3');
          audio.play();
          setTimeout(audio.play(), 1000*reciprocal);
        }}>Click</div>
        <div className="btn" onClick={() => {
          setStart(false)
          // const audio = new Audio('shrill_whistle6.mp3');
          audio.play();
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
