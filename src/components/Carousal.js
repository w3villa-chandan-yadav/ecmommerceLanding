// src/Carousel.js
import React, { useState,useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";





const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // This function will move to the next slide
//   const goNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   // This function will move to the previous slide
//   const goPrev = () => {

//     console.log("here"+items.length)


//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + items.length) % items.length
//     );
//   };

const [currentIndex, setCurrentIndex] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalItems = items.length;


  const itemsWithDuplicates = [items[totalItems - 1], ...items, items[0]];

  const goNext = () => {
    if (isTransitioning) return; 

    setIsTransitioning(true);

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex === itemsWithDuplicates.length - 1) {
        setTimeout(() => setIsTransitioning(false), 500); 
        return 1;
      }
    //   return nextIndex;
    return ( nextIndex+items.length)%items.length;

    });
  };

  const goPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - 1;
      // If we are at the first duplicated item, jump to the last one
    //   if (prevIndexNew === 0) {
    //     setTimeout(() => setIsTransitioning(false), 500); // After transition ends
    //     return itemsWithDuplicates.length - 2; // Go to the last real item
    //   }
      return ( prevIndexNew+items.length)%items.length;
    });
  };

  // useEffect(() => {
  //   const interval = setInterval(goNext, 2000);
  //   return () => clearInterval(interval); // Clean up on unmount
  // }, []);

  return (
    <div className="carousel-container w-full h-full relative ">
      <button className="prev absolute z-20 top-[50%] translate-y-[-50%] left-2 text-lg bg-white px-2 py-1 rounded-full" onClick={goPrev}>{"<"}</button>
      {/* <div className="carousel-item"> */}
        {/* <img src={items[currentIndex]} alt="carousel" /> */}
        {/* this is {currentIndex + 1} of {items.length} */}
      {/* </div> */}
      

      <img src={items[currentIndex].image} alt='main_ingae' className='w-full h-full object-cover object-center'/>
                     <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-7'>
                      <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-xs'> 
                          Mobile
                      </button>
                      <h3 className='text-4xl  w-[330px] font-extrabold font-sans '>
                          {items[currentIndex].heading}
                      </h3>
                      <button className='flex items-center gap-1 border-[1px] border-black rounded-md px-3 py-1' >
                          Learn More <IoIosArrowRoundForward className='text-3xl'/>
                      </button>
                     </div>



      <button className=" absolute z-20 top-[50%] translate-y-[-50%] right-2 text-lg bg-white px-2 py-1 rounded-full" onClick={goNext}>{">"}</button>
    </div>
  );
};

export default Carousel;
