import { useEffect, useRef, useState } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import "./scroll.scss";
import { Loader } from "@components/loaders/Loader";
import {slider as sliderContent } from "@json/slider.json"

export const Slider: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  const contentRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const Slide = (type: string) => {
    let local: number;
    if (type === "next") {
      local = active + 1;
      sliderContent.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
    setPrev(active);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      Slide("next");
    }, 10000);

    return () => clearInterval(interval);
  }, [Slide]);

  useEffect(() => {
    if (
      contentRef.current &&
      prevRef.current &&
      nextRef.current &&
      nameRef.current
    ) {
      contentRef.current.style.bottom = "-100%";
      prevRef.current.style.left = "-10%";
      nextRef.current.style.right = "-10%";
      setTimeout(() => {
        if (nameRef.current)
          nameRef.current.innerText = sliderContent[active].name;
        if (contentRef.current) contentRef.current.style.bottom = "0%";
        if (prevRef.current) prevRef.current.style.left = "0%";
        if (nextRef.current) nextRef.current.style.right = "0%";
      }, 500);
    }
  }, [active]);

  useEffect(() => {
    const imagesToLoad = sliderContent.map((slide) => {
      const img = new Image();
      img.src = slide.img;
      return img;
    });

    Promise.all(imagesToLoad.map((img) => img.decode()))
      .then(() => setIsLoading(false))
      .catch((error) => console.error("Error loading images:", error));
  }, [sliderContent]);

  return (
    <div className="rounded-xl relative shadow-lg overflow-hidden">
      {isLoading ? ( // Mostrar mensaje de carga si las imágenes están cargando
        <div className="w-full h-[600px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        // Mostrar el slider una vez que las imágenes se hayan cargado completamente
        <div>
          <div className="w-full h-[600px] relative overflow-hidden">
            {sliderContent.map((slide, i) => (
              <img
                src={slide.img}
                key={i}
                alt="slideImg"
                className={`h-full w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                  i === active ? "clip-visible" : "clip-hidden"
                }`}
              />
            ))}
            <img
              src={sliderContent[prev].img}
              alt="previmg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 w-full flex items-center justify-between px-3">
            <button
              id="back"
              ref={prevRef}
              className="bg-gray-800 text-white rounded-full"
              onClick={() => Slide("prev")}
              aria-label="Flecha izquierda"
            >
              <RiArrowDropLeftLine className="text-4xl" />
            </button>
            <button
              id="forward"
              ref={nextRef}
              className="bg-gray-800 text-white rounded-full"
              onClick={() => Slide("next")}
              aria-label="Flecha derecha"
            >
              <RiArrowDropLeftLine className="rotate-180 text-4xl" />
            </button>
          </div>
          <div className="content text-gray-700" ref={contentRef}>
            <h1 ref={nameRef} className="font-bold text-xl">
              {sliderContent[0].name}
            </h1>
            <p className="font-medium">{sliderContent[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
