import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className="w-full h-screen">
      <div className="TEXTSTRUCTURE mt-52 px-3">
        {["we create", "eye opening", "presentation"].map((item, index) => (
          <div key={index} className="masker mt-40 flex w-fit items-center">
            {index === 1 && <div className="mr-[1vw] rounded-md w-[8vw] h-[5.7vw] -top-[1.2vw] relative bg-amber-400"></div>}
            <h1 className="flex item-centre uppercase h-full leading-[0vw] text-[9vw] tracking-tight font-['FoundersGrotesk (woff) Roboto sans-serif'] font-semibold">
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-wide leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-centre gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-500 font-light text-sm hover:text-white hover:dark:bg-gray-800 uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-500 rounded-full hover:text-white hover:dark:bg-gray-800">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
