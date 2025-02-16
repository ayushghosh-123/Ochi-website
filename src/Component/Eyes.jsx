// import React from 'react'

import { useEffect, useState } from "react";

function Eyes() {
    const [rotate, setRotate] = useState(0)
    
useEffect (() => {
    window.addEventListener("mousemove",(e)=>{
        let mousex = e.clientX; 
        let mousey = e.clientY;

        let deltax = mousex - window.innerWidth/2;
        let deltay = mousey - window.innerHeight/2;

        var angle = Math.atan2(deltax, deltay) * (180/Math.PI);
        setRotate(angle-180)
    })
})

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex flex-row   gap-10   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] bg-amber-600 rounded-full '>
                <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                <div style={{transform: `translate(-50% ,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                <div className='w-10 h-10 bg-zinc-100 rounded-full '>
                    </div>
                </div>
                </div>
                </div>
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] bg-amber-500 rounded-full '>
                <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                <div style={{transform: `translate(-50% ,-50% ) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                <div className='w-10 h-10 bg-zinc-100 rounded-full '>
                </div>
                </div>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
