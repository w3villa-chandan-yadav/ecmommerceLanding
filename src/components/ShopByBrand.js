import React from 'react';




import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ShopByBrand = () => {
  return (
    <section className='w-screen h-full overflow-hidden'>
        <div className='w-[90%] mx-auto py-10'>
            <h3 className='text-center text-2xl kanit-semibold'>Shop by Brand</h3>
            <div className='w-[10%] h-1 mx-auto bg-orange-500 rounded-lg mt-2'/>    
            <div className='w-full h-full gap-3 mt-5 flex justify-center'>
            {/* The last on is not getting center when we use grid */}
 

  

      <Swiper
                        // install Swiper modules
                        modules={[ Pagination,Autoplay]}
                        spaceBetween={0}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{
                          delay: 1200, // Delay between slides in milliseconds
                          disableOnInteraction: false, // Keep autoplay even after interaction
                        }}
                      //   autoplay={true}
                      //   navigation
                        pagination={{ clickable: true }}
                      //   scrollbar={{ draggable: true }}
                      //   onSwiper={(swiper) => console.log(swiper)}
                      //   onSlideChange={() => console.log('slide change')}
                        breakpoints={{

                          120:{
                           slidesPerView:1,
                           spaceBetween:8
                          },

        320: {
          slidesPerView: 2,
          spaceBetween: 10,  // Smaller space on small screens
        },
        640: {
          slidesPerView: 2.5,  // Display 1.5 slides for medium screens (tablet)
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,  // Display 2 slides for larger tablets
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,  // Display 3 slides for desktop
          spaceBetween: 40,
        },
      }}
       className='third_swiper md:h-[170px] h-[138px]'
                      >
                         <SwiperSlide>
                         <div className='  border-[1px] border-gray-600 p-2 md:h-[150px] md:w-[150px] w-[120px] h-[120px] '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq5Csbhxy7z8SV1AEZkf038Wp7-C3aNcqeA&s' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                         </SwiperSlide>

                         <SwiperSlide>
                         <div className='  border-[1px] border-gray-600 p-2 md:h-[150px] md:w-[150px] w-[120px] h-[120px] '>
                    <img src='https://chilloutbegusarai.in/image/cache/catalog/journal3/brands/awesome-200x200.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                         </SwiperSlide>


                         <SwiperSlide>
                         <div className=' border-[1px] border-gray-600 p-2 md:h-[150px] md:w-[150px] w-[120px] h-[120px] '>
                    <img src='https://bellesofbeauty.com/image/cache/catalog/journal3/brands/mellisa-600x315w.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                         </SwiperSlide>

                         <SwiperSlide>
                         <div className='border-[1px] border-gray-600 p-2 md:h-[150px] md:w-[150px] w-[120px] h-[120px] '>
                    <img src='https://wallpapercat.com/w/full/4/4/4/2147266-1920x1080-desktop-1080p-htc-logo-background-image.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                         </SwiperSlide>

                         <SwiperSlide>
                           
                <div className='border-[1px] border-gray-600 p-2 md:h-[150px] md:w-[150px] w-[120px] h-[120px]'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62ChstFudVi6093NAWexrHD7j88tNDDXkaQ&s' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                         </SwiperSlide>



                         <SwiperSlide>
                         <div className='border-[1px] border-gray-600 p-2 md:h-[150px] md:w-[150px] w-[120px] h-[120px] '>
                    <img src='https://i.pinimg.com/originals/e4/36/e8/e436e8d5381b8ffe5773d8b8b871b0e6.gif' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                         </SwiperSlide>



                      


                       

                         </Swiper>
 
     

    







                

            

                

             


             

               {/* This on not getting center */}
                
                
                

            </div>

        </div>

    </section>
  )
}

export default ShopByBrand