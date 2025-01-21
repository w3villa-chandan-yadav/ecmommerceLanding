import React from 'react';
import { RiUser3Fill } from "react-icons/ri";
import { FaCommentDots } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';





const Blogs = () => {
  return (
<section className='w-screen h-full py-8 overflow-hidden'>
    <div className='w-[85%] mx-auto '>
        <h3 className='text-center text-2xl kanit-semibold '>From our Blog</h3>
        <div className='h-[2px] rounded-lg w-[10%] mx-auto bg-orange-500'/>
        <p className='text-center text-gray-500 mt-2 kanit-regular'>
            Journal comes with its oen simple yet poerful blog.With the new advantage typography style you post page design will br unmatchde.
        </p>
        <div className='flex justify-center my-8'>
            <button className='bg-blue-500 text-white px-4 py-2 kanit-medium '>
                LATEST POST
            </button>
            <button className='bg-gray-300 text-black px-4 py-2 kanit-medium '>
                LATEST POST
            </button>
        </div>

        <div className='w-full h-full '>



            <Swiper
                                    // install Swiper modules
                                    modules={[ Pagination,Autoplay]}
                                    spaceBetween={50}
                                    // slidesPerView={3}
                                    loop={true}
                                    autoplay={{
                                      delay: 1500, // Delay between slides in milliseconds
                                      disableOnInteraction: false, // Keep autoplay even after interaction
                                    }}
                                  //   autoplay={true}
                                  //   navigation
                                    pagination={{ clickable: true }}
                                  //   scrollbar={{ draggable: true }}
                                  //   onSwiper={(swiper) => console.log(swiper)}
                                  //   onSlideChange={() => console.log('slide change')}
                                  breakpoints={{
                                    320: {
                                      slidesPerView: 1,
                                      spaceBetween: 10,  // Smaller space on small screens
                                    },
                                    640: {
                                      slidesPerView: 2,  // Display 1.5 slides for medium screens (tablet)
                                      spaceBetween: 20,
                                    },
                                    768: {
                                      slidesPerView: 2,  // Display 2 slides for larger tablets
                                      spaceBetween: 30,
                                    },
                                    1024: {
                                      slidesPerView: 3,  // Display 3 slides for desktop
                                      spaceBetween: 40,
                                    },
                                  }}







                                  className='fourth_swiper'
                                  >
                                     <SwiperSlide>
                                     <div className='w-full h-[490px] bg-gray-200'>
                <div className='w-full h-[50%] bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYldPpXCNwLLFnGcRedBBrCVwe_C9NcRbSUQ&s' className='w-full h-[90%] object-cover' alt='blog'/>
                    <div className='flex justify-center items-center gap-5 text-white '>
                        <h3 className='flex items-center gap-2'>  <RiUser3Fill/>admin</h3>
                        <h3 className='flex items-center gap-1'><FaCommentDots/>39</h3>
                        <h3 className='flex items-center gap-1'><FaEye/>3898</h3>  
                        </div>
                </div>
                <h3 className='text-center text-gray-600 text-lg font-extrabold  kanit-regular'>Journal blog is Here</h3>
            <p className='text-center text-sm text-gray-600 kanit-extralight'>
                The journal 3 blog has been geatly imporoved and it now comes with the most advance set of typography tools
                ,including custom dropcaps support as well as option newspaper option newspaper-like fluid colums.You can break 
                up the page in up to 4 columns and change the configure per breakpoint for the best article layout on any sceen width.The journal blog ...
            </p>

            <p className='flex justify-center items-center my-4 kanit-medium ' >
                READ MORE <IoIosArrowRoundForward/> 
            </p>
            </div>
                                     </SwiperSlide>


                                     <SwiperSlide>
                                     <div className='w-full h-[490px] bg-gray-200'>
                <div className='w-full h-[50%] bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYldPpXCNwLLFnGcRedBBrCVwe_C9NcRbSUQ&s' className='w-full h-[90%] object-cover' alt='blog'/>
                    <div className='flex justify-center items-center gap-5 text-white '>
                        <h3 className='flex items-center gap-2'>  <RiUser3Fill/>admin</h3>
                        <h3 className='flex items-center gap-1'><FaCommentDots/>39</h3>
                        <h3 className='flex items-center gap-1'><FaEye/>3898</h3>  
                        </div>
                </div>
                <h3 className='text-center text-gray-600 text-lg font-extrabold  kanit-regular'>Journal blog is Here</h3>
            <p className='text-center text-sm text-gray-600 kanit-extralight'>
                The journal 3 blog has been geatly imporoved and it now comes with the most advance set of typography tools
                ,including custom dropcaps support as well as option newspaper option newspaper-like fluid colums.You can break 
                up the page in up to 4 columns and change the configure per breakpoint for the best article layout on any sceen width.The journal blog ...
            </p>

            <p className='flex justify-center items-center my-4 kanit-medium '>
                READ MORE <IoIosArrowRoundForward/> 
            </p>
            </div>
                                     </SwiperSlide>




                                     <SwiperSlide>
                                     <div className='w-full h-[490px] bg-gray-200'>
                <div className='w-full h-[50%] bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYldPpXCNwLLFnGcRedBBrCVwe_C9NcRbSUQ&s' className='w-full h-[90%] object-cover' alt='blog'/>
                    <div className='flex justify-center items-center gap-5 text-white  '>
                        <h3 className='flex items-center gap-2'>  <RiUser3Fill/>admin</h3>
                        <h3 className='flex items-center gap-1'><FaCommentDots/>39</h3>
                        <h3 className='flex items-center gap-1'><FaEye/>3898</h3>  
                        </div>
                </div>
                <h3 className='text-center text-gray-600 text-lg font-extrabold  kanit-regular '>Journal blog is Here</h3>
            <p className='text-center text-sm text-gray-600 kanit-extralight'>
                The journal 3 blog has been geatly imporoved and it now comes with the most advance set of typography tools
                ,including custom dropcaps support as well as option newspaper option newspaper-like fluid colums.You can break 
                up the page in up to 4 columns and change the configure per breakpoint for the best article layout on any sceen width.The journal blog ...
            </p>

            <p className='flex justify-center items-center my-4 kanit-medium '>
                READ MORE <IoIosArrowRoundForward/> 
            </p>
            </div>
                                     </SwiperSlide>





                                     <SwiperSlide>
                                     <div className='w-full h-[490px] bg-gray-200'>
                <div className='w-full h-[50%] bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYldPpXCNwLLFnGcRedBBrCVwe_C9NcRbSUQ&s' className='w-full h-[90%] object-cover' alt='blog'/>
                    <div className='flex justify-center items-center gap-5 text-white '>
                        <h3 className='flex items-center gap-2'>  <RiUser3Fill/>admin</h3>
                        <h3 className='flex items-center gap-1'><FaCommentDots/>39</h3>
                        <h3 className='flex items-center gap-1'><FaEye/>3898</h3>  
                        </div>
                </div>
                <h3 className='text-center text-gray-600 text-lg font-extrabold  kanit-regular'>Journal blog is Here</h3>
            <p className='text-center text-sm text-gray-600 kanit-extralight'>
                The journal 3 blog has been geatly imporoved and it now comes with the most advance set of typography tools
                ,including custom dropcaps support as well as option newspaper option newspaper-like fluid colums.You can break 
                up the page in up to 4 columns and change the configure per breakpoint for the best article layout on any sceen width.The journal blog ...
            </p>

            <p className='flex justify-center items-center my-4 kanit-medium '>
                READ MORE <IoIosArrowRoundForward/> 
            </p>
            </div>
                                     </SwiperSlide>




                                     <SwiperSlide>
                                     <div className='w-full h-[490px] bg-gray-200'>
                <div className='w-full h-[50%] bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYldPpXCNwLLFnGcRedBBrCVwe_C9NcRbSUQ&s' className='w-full h-[90%] object-cover' alt='blog'/>
                    <div className='flex justify-center items-center gap-5 text-white '>
                        <h3 className='flex items-center gap-2'>  <RiUser3Fill/>admin</h3>
                        <h3 className='flex items-center gap-1'><FaCommentDots/>39</h3>
                        <h3 className='flex items-center gap-1'><FaEye/>3898</h3>  
                        </div>
                </div>
                <h3 className='text-center text-gray-600 text-lg font-extrabold kanit-regular '>Journal blog is Here</h3>
            <p className='text-center text-sm text-gray-600 kanit-extralight'>
                The journal 3 blog has been geatly imporoved and it now comes with the most advance set of typography tools
                ,including custom dropcaps support as well as option newspaper option newspaper-like fluid colums.You can break 
                up the page in up to 4 columns and change the configure per breakpoint for the best article layout on any sceen width.The journal blog ...
            </p>

            <p className='flex justify-center items-center my-4 kanit-medium '>
                READ MORE <IoIosArrowRoundForward/> 
            </p>
            </div>
                                     </SwiperSlide>
                                     </Swiper>
                 
        </div>



    </div>

</section>  )
}

export default Blogs