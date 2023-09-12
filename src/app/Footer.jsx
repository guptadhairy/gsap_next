"use client"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React,  { useEffect, useRef } from "react";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null)
    const textRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom top",
                },
            }
        );
        tl.to(
            textRef.current,
            {
                translateY: -300
            },
            0
        );
        tl.to(
            videoRef.current,
            {
                filter: "grayscale(80%)"
            },
            0
        );
    }, [])

  return (
    <div className='video-section'>
      <video src='/vdo.mp4' autoPlay muted loop></video>
      <div className='video-copy'>
        <h1>DEVSENA</h1>
      </div>
    </div>
  )
}

export default Footer
