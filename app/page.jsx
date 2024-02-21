"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import './globals.css'
import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {

  const [turn, setTurn] = useState(6)
  const [secend, setSecend] = useState(180);
  const [reciprocal, setR] = useState(0);
  const [start, setStart] = useState(false);
  const [audio, SetAudio] = useState("");
  const [editswitch, setEditswitch] = useState(false);
  const [timer,settimer] = useState("")
  // const [valuecolor,setValuecolor] = useState(1)
  const [yellowtime,setYellowtime] = useState(10)
  const [readytime,setReadytime] = useState(10)
  const [music,setMusic] = useState("")



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
    setMusic(new Audio("silence.mp3"))
  }, []);




return (
  <div className={`${styles.center} ${styles.display}`}>
    {/* <div className={styles.display}> */}
      <div className={`${styles.fontSize} ${reciprocal<=yellowtime?reciprocal<=3?styles.red:styles.yellow:styles.green}`} onClick={() => {
        setEditswitch(editswitch ? false : true);
        music.play();
      }}>{reciprocal} </div>
    {/* </div> */}
    <div className={`${styles.display} ${styles.toolbar}`}>
      {editswitch ? <div className={`${styles.display} ${styles.center}`} > <input onChange={(e) => {
        setR(e.target.value)
        setSecend(e.target.value * 1000)
      }} onBlur={() => {
        setEditswitch(false)
      }} />
      {/* <input onChange={(e) => {
        // setR(e.target.value)
        // setYellowtimed(e.target.value)
      }} /> */}
      </div>       
: null}
    </div>
    <div className={`${styles.display} ${styles.toolbar}`}>
      <div className={`${styles.btn}`} onClick={() => {
        setStart(true);
        audio.play();
        setTimeout(()=>(audio.play()),secend);
      }}>計時</div>
      <div className={`${styles.btn}`} onClick={() => {
        setStart(false)
        audio.play();
        clearTimeout(timer);
      }}>暫停</div>
      <div className={`${styles.btn}`} onClick={() => {
        setR(180)
      }}>重設</div>
    </div>
  </div>

)


}
