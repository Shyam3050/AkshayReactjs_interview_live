import { useEffect } from "react";
import { useState } from "react";
import {data} from "../src/constant"

const ImageSlider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  function prevHandler() {
    setActiveImgIndex(!activeImgIndex ? data.length - 1 : activeImgIndex - 1);
  }

  function nextHandler() {
    setActiveImgIndex((activeImgIndex + 1) % data.length);
  }

  useEffect(() =>{
   const timer = setTimeout(() => {nextHandler()},5000)
   return () =>{
    clearTimeout(timer)
   }
  }, [activeImgIndex])
  return (
    <div className="flex justify-center">
      <button className="border mr-6 bg-gray-100" onClick={prevHandler}>
        Prev
      </button>
      {data.map((img, i) => (
        <img
          src={img}
          key={img}
          alt="wallpaper"
          className={
            "w-[400px] h-[200px] object-contain " +
            (activeImgIndex === i ? " block" : " hidden")
          }
        />
      ))}
      <button className="border ml-6 bg-gray-100" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
