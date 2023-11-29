import { useState } from "react";

const data = [
  "https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/10/420/desktop-wallpaper-abstract-paint-splatter-style-blobs-cartoon-motion-backgrounds-blue-splatter-background.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThic2tKpmXMu8vMaXdt_S_nE0FGrbhPjDtR6ZL9idY8ByijG48sFbwvprf2TU42bCOLGQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7KjdeW_cIwgUdmKTdQHdNzSOC_Fqs3U2Pnes1YvU0w2bKYz-nAYLyuypN4-qkqQXYwk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUxeU6FvIWymAshd0vbaRBVGjFrOy6WmB3g&usqp=CAU",
];

const ImageSlider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  function prevHandler() {
    setActiveImgIndex(!activeImgIndex ? data.length - 1 : activeImgIndex - 1);
  }

  function nextHandler() {
    setActiveImgIndex((activeImgIndex + 1) % data.length);
  }
  return (
    <div className="flex justify-center">
      <button className="border mr-6 bg-gray-100" onClick={prevHandler}>
        Prev
      </button>
      <img
        src={data[activeImgIndex]}
        alt="wallpaper"
        className="w-[400px] h-[200px] object-contain"
      />
      <button className="border ml-6 bg-gray-100" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
