// import React from 'react'

function Abou() {
  return (
    <div  data-scroll data-scroll-speed='-.2' className="='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-['Neue_Montreal'] text-[4vw]  leading-[4.5vw] tracking-tighter">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full border-y border-zinc-500/60 mt-12 px-[5.922vw]">
        <div className="flex flex-col md:flex-row gap-10 pt-4 pb-28">
          <div className="md:basis-[25vw] lg:basis-[50vw]">
            What you can expect:
          </div>
          <div className="flex flex-col basis-[25vw] w-[50vw] gap-7">
            <span>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </span>

            <span>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </span>
          </div>
          <div className="flex flex-col basis-[25vw]  justify-end md:pl-24">
            <span className="mb-3 ">S:</span>
            <span className="underline underline-offset-1">Instagram</span>
            <span className="underline underline-offset-1">Behance</span>
            <span className="underline underline-offset-1">Facebook</span>
            <span className="underline underline-offset-1">Linkedin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abou