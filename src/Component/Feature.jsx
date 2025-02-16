// import React from 'react'

// import { span } from "framer-motion/client";

function Feature() {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Feature Project
        </h1>
      </div>
      <div className="px-20">
        <div className="cards pt-5 w-full relative flex gap-10">
          <div className="cardcontainer  w-1/2 h-[75vh]  relative">
            <h1 className="absolute text-[#CDEA68] -translate-x-1/2 top-1/2 -tracking-y-1/2 left-full z-[9] leading-none text-8xl tracking-tighter">
              {"SALINECE".split('').map((item, index) =><span key={index} className="">{item}</span>)}
            </h1>
            <div className=" card w-full rounded-xl h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer  w-1/2 h-[75vh]  relative">
            <h1 className="absolute text-[#CDEA68] translate-x-1/2 top-1/2 -tracking-y-1/2 right-full z-[9] leading-none text-8xl tracking-tighter">
            {"SPACSHIP".split('').map((item, index) =><span key={index} className="">{item}</span>)}
            </h1>
            <div className=" card w-full rounded-xl h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Feature;
