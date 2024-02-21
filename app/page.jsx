"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import './globals.css'
import Head from 'next/head'

export default function Home() {

  const [turn, setTurn] = useState(6)
  const [secend, setSecend] = useState(180);
  const [reciprocal, setR] = useState(180);
  const [start, setStart] = useState(false);
  const [audio, SetAudio] = useState("");
  const [editswitch, setEditswitch] = useState(false);
  const [timer,settimer] = useState("")


  let timet

  useEffect(() => {
    if (!start) {
      return
    }
    timet = setInterval(() => {
      setR(reciprocal => reciprocal - 1)
    }, 1000)
    return () => clearInterval(timet)
  }, [start])

  useEffect(() => {
    if (reciprocal === 0) {
      setStart(false)
    } else {
      return
    }
  }, [reciprocal])


  useEffect(() => {
    SetAudio(new Audio("shrill_whistle6.mp3"));
  }, []);




return (
  <div className="center">
    <div className='display'>
      <div className='fontSize' onClick={() => {
        setEditswitch(editswitch ? false : true)
      }}>{reciprocal} </div>
    </div>
    <div className='display justfy'>
      {editswitch ? <input onChange={(e) => {
        setR(e.target.value)
        setSecend(e.target.value * 1000)
      }} onBlur={() => {
        setEditswitch(false)
      }} /> : null}
    </div>
    <div className="display">
      <div className="btn" onClick={() => {
        setStart(true);
        audio.play();
        setTimeout(()=>(audio.play()),secend);
      }}>開始</div>
      <div className="btn" onClick={() => {
        setStart(false)
        audio.play();
        clearTimeout(timer);
      }}>暫停</div>
      <div className="btn" onClick={() => {
        setR(180)
      }}>重設</div>
    </div>

  </div>

)


}
