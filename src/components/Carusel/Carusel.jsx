import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Carusel({ slides }) {
  let [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex z-10 px-10 text-white text-[20px]">
        <button onClick={previousSlide}>
          <FaArrowCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5  ${
                i === current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
