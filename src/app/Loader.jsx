"use client"

import React, {useEffect} from 'react'
import { gsap } from 'gsap';

const Loader = () => {
    useEffect(()=>{
        var tl = gsap.timeline()
        tl.fromTo(".loader",{
            top: 0,
        },
        {
            top: '-100vh',
            delay: 0.4,
            duration: 1.3
        });
    })
  return (
    <div className='loader'>
      0%
    </div>
  )
}

export default Loader
