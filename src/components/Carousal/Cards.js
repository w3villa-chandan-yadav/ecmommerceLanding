import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';

export default () => {

  // const dots = document.querySelectorAll(".swiper-pagination-bullet");

  


//   useEffect(()=>{
// console.dir(dots[0]);
// if(dots){
//   dots.forEach((dotss)=>{
//     dotss.style.backgroundColor="#fff";
//   })

// }

 

//   },[])




  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1500, // Delay between slides in milliseconds
        disableOnInteraction: false, // Keep autoplay even after interaction
      }}
    //   autoplay={true}
    //   navigation
      pagination={{ clickable: true ,
            // renderBullet:(index,className)=>{
            //   return(
            //     `<span class="${className}  bg-orange-500 w-7 h-7 mx-1 rounded-full transition-all duration-300 hover:bg-blue-300">this</span>`
            //   //   <span
            //   //   style={{
            //   //     width: '28px',
            //   //     height: '28px',
            //   //     margin: '0 4px',
            //   //     borderRadius: '50%',
            //   //     backgroundColor: 'orange',
            //   //     transition: 'all 0.3s',
            //   //   }}
            //   //   onMouseEnter={(e) => e.target.style.backgroundColor = 'lightblue'}
            //   //   onMouseLeave={(e) => e.target.style.backgroundColor = 'orange'}
            //   // >
            //   //   {index + 1}
            //   // </span>
            //   )
            // }



      }}

      // pagination={{
      //   clickable: true,
      //   renderBullet: (index, className) => {
      //     // Return JSX instead of HTML string
      //     return (
      //       <span
      //         className={`${className} bg-orange-500 w-7 h-7 mx-1 rounded-full transition-all duration-300 hover:bg-blue-300`}
      //       >
      //         {/* Optionally add the index number or other content */}
      //         {index + 1}
      //       </span>
      //     );
      //   },
      // }}







    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    className='h-full w-full'
    >
      <SwiperSlide>
      <div className="carousel-container w-full h-full flex items-center justify-end relative ">
          <img src={image1} alt='main_ingae' className='w-[60%] h-[60%]  object-cover object-center'/>
                             <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-1 lg:gap-7'>
                              <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-xs'> 
                                  Products
                              </button>
                              <h3 className='lg:text-4xl text-sm  w-[170px] lg:w-[310px] font-extrabold font-sans lg:kanit-bold  kanit-normal '>
                                  Buy the best products from our website
                              </h3>
                              <button className='flex items-center gap-1 border-[1px] border-black rounded-md lg:px-3 px-1  py-[2px] lg:py-1' >
                                  Learn More <IoIosArrowRoundForward className='lg:text-3xl text-xl'/>
                              </button>
                             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="carousel-container w-full h-full flex items-center justify-end relative ">
          <img src={image2} alt='main_ingae' className='w-[70%] h-[70%]  object-contain object-center'/>
                             <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-1 lg:gap-7'>
                              <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-xs'> 
                                  House
                              </button>
                              <h3 className='lg:text-4xl text-sm  w-[190px] lg:w-[310px] font-extrabold font-sans lg:kanit-bold  kanit-normal '>
                                Best designer products in the house.
                              </h3>
                              <button className='flex items-center gap-1 border-[1px] border-black rounded-md lg:px-3 px-1  py-[2px] lg:py-1' >
                                  Learn More <IoIosArrowRoundForward className='lg:text-3xl text-xl'/>
                              </button>
                             </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
      <div className="carousel-container w-full h-full flex items-center justify-end relative ">
          <img src={image1} alt='main_ingae' className='w-[60%] h-[60%]  object-cover object-center'/>
                             <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-1 lg:gap-7'>
                              <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-xs'> 
                                  Mobile
                              </button>
                              <h3 className='lg:text-4xl text-sm  w-[190px] lg:w-[310px] font-extrabold font-sans lg:kanit-bold  kanit-normal '>
                              Best Mobile options at any resolution
                              </h3>
                               <button className='flex items-center gap-1 border-[1px] border-black rounded-md lg:px-3 px-1  py-[2px] lg:py-1' >
                                  Learn More <IoIosArrowRoundForward className='lg:text-3xl text-xl'/>
                              </button>
                             </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
      <div className="carousel-container w-full h-full flex items-center justify-end relative ">
          <img src={image3} alt='main_ingae' className='w-[60%] h-[60%]  object-contain object-center'/>
                             <div className=' absolute left-[3%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-1 lg:gap-7'>
                              <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-xs'> 
                                  Cloths
                              </button>
                              <h3 className='lg:text-4xl text-sm  w-[190px] lg:w-[310px] font-extrabold font-sans lg:kanit-bold  kanit-normal '>
                              Try best clothing options in the market
                              </h3>
                              <button className='flex items-center gap-1 border-[1px] border-black rounded-md lg:px-3 px-1  py-[2px] lg:py-1' >
                                  Learn More <IoIosArrowRoundForward className='lg:text-3xl text-xl'/>
                              </button>
                             </div>
            </div>
        </SwiperSlide>
      
    </Swiper>
  );
};