import React, { useState } from 'react'

const HomeCards = () => {
    const [read , setRead] = useState(false)
  return (
    <div className="flex items-center flex-wrap">
      <div className="text-white pt-10">
        <div className="flex gap-3 items-center ">
          <div className="flex items-center mb-4 pb-4 space-x-2 border-b-2 border-[#720e0e]">
            <h1 className=" w-14 px-5 py-3 rounded-lg border-[2px] font-sans font-semibold border-[#720e0e]  bg-[#1F1F1F]">
              01
            </h1>
            <h3 className="font-[500] text-[22px]">
              What is the StreamVibe free trial?
            </h3>
          </div>
          <p
            onClick={() => setRead(!read)}
            className="cursor-pointer text-[20px] mb-1"
          >
            {read ? "-" : "+"}
          </p>
        </div>
        <h2 className="text-[#999999] text-[18px] font-[400] w-[400px]">
          {read
            ? "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            : ""}
        </h2>
      </div>
    </div>
  );
}

export default HomeCards