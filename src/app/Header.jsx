"use client";

import Link from 'next/link';
import React, { useState } from 'react'

const header = () => {
  const [search, setSearch] = useState("");
  return (
    
    <div>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search'/>
      </nav>
    </div>
  )
}

export default header
