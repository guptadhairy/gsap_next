"use client"
import Hero from "./Hero";
import {gsap} from 'gsap';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    gsap.fromTo(".tony h1", {
      scale: 0
    }, {
      scale: 1,
    });
  }, []);
  return (
    <>
    
    <div className="design">
    <div className="tony">
      <h1>Hey Tony Stark</h1>
    </div>
    <div className="monkey">
      <img src="/a.jpg" alt="peace" />
    </div>
    </div>
    <Hero/>
    </>
  )
}
