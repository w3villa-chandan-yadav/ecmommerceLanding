import React from 'react';
import { CiHeart } from "react-icons/ci";
import { RiExchangeLine } from "react-icons/ri";




import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const FeatureProduct = () => {

    const isShow = true;



  return (
    <section className='w-screen h-full bg-gray-300 pt-7 pb-7 overflow-hidden'>
        <div className='w-[85%] m-auto'>
            <h2 className='text-center font-bold text-2xl kanit-semibold'>Feature Catogory</h2>
            <div className='h-[1px] lg:w-[10%] w-[30%] rounded-md bg-orange-500 mx-auto mt-2 mb-3'/>


            <p className='w-[90%] mx-auto text-center  text-gray-500 my-8 kanit-regular' >Easily create category based module and display products from specific categories or brands only.The advanced page builder allows you to create any grid layout with full content at any breaking.</p>
        {/* <div className='w-full flex items-center lg:justify-between lg:flex-row flex-col '>
         */}

<div className='w-full  flex items-center justify-center flex-col lg:flex-row '>

            <div className='w-full  h-[420px]  px-4 py-5 bg-gray-400'> 
                <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[30px] bg-orange-700'/>
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div>
                    <h3 className='text-sm font-bold text-gray-600'>Accessories</h3>
                    <h3 className='text-sm font-bold text-gray-600'>Dresses</h3>
                    <h3 className='text-sm font-bold text-gray-600'>Pants</h3>
                    <h3 className='text-sm font-bold text-gray-600'>T-Shirts</h3>
                    <h3 className='text-blue-600 underline text-sm font-bold'>SEE ALL Fashion</h3>
                </div>

            </div>

             {/* <div className='w-full h-full lg:flex items-end  grid grid-cols-2 '> */}
             <div className=' lg:h-[420px] lg:w-[75%] w-full h-full bg-white  '>
             <h3 className='text-sm font-extrabold ml-3'>Fashion</h3>
             <div className='h-[2px] w-[40px] ml-3 bg-orange-700'/>



               <Swiper
                   // install Swiper modules
                   modules={[ Pagination,Autoplay]}
                   spaceBetween={0}
                //    slidesPerView={4}
                   loop={true}
                //    autoplay={{
                //      delay: 2500, // Delay between slides in milliseconds
                //      disableOnInteraction: false, // Keep autoplay even after interaction
                //    }}
                 //   autoplay={true}
                 //   navigation
                   pagination={{ clickable: true }}
                 //   scrollbar={{ draggable: true }}
                 //   onSwiper={(swiper) => console.log(swiper)}
                 //   onSlideChange={() => console.log('slide change')}
                


                 breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,  // Smaller space on small screens
                    },
                    640: {
                      slidesPerView: 2,  // Display 1.5 slides for medium screens (tablet)
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,  // Display 2 slides for larger tablets
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,  // Display 3 slides for desktop
                      spaceBetween: 30,
                    },
                  }}


                 className='second_swiper'
                 >
                    {/* <SwiperSlide>
                    <div className='w-full  h-[400px]  px-4 py-5 bg-gray-400'> 
                <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[30px] bg-orange-700'/>
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div>
                    <h3 className='text-sm font-bold text-gray-600'>Accessories</h3>
                    <h3 className='text-sm font-bold text-gray-600'>Dresses</h3>
                    <h3 className='text-sm font-bold text-gray-600'>Pants</h3>
                    <h3 className='text-sm font-bold text-gray-600'>T-Shirts</h3>
                    <h3 className='text-blue-600 underline text-sm font-bold'>SEE ALL Fashion</h3>
                </div>

            </div>
                    </SwiperSlide> */}


                    {
                        [1,2,3,4].map((_,index)=>{
                            return(
                                <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 py-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                    <div className='flex items-center lg:gap-3 gap-1'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide>
                            )
                        })
                    }


                   {/* <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'>  */}
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                {/* <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide> */}
{/* 
                     <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'>  */}
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                {/* <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide> */}
{/* 
                     <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'>  */}
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                {/* <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide> */}

                     {/* <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'>  */}
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                {/* <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide> */}


                     <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center lg:gap-3 gap-1'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide>


                     <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 md:text-xs text-[5px] rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center lg:gap-3 gap-1'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide>

{/* 
                     <SwiperSlide className=''>
                  <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5 '>  */}
                {/* <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/> */}
                {/* <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
                     </SwiperSlide> */}
                     
             
                     
             
                     
                    
             
                    
                     
             
                     
             
                    
                   
                 </Swiper>


 













            {/* <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/>
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 w-full relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div> */}





            {/* <div className='w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/>
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div>
 */}




            {/* <div className='hidden lg:block w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/>
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div> */}




{/* 
            <div className='hidden lg:block w-full h-full lg:h-[400px] bg-white px-4 py-5'> 
                <h3 className='text-sm font-extrabold'>Fashion</h3>
                <div className='h-[2px] w-[40px] bg-orange-700'/>
                <div className='h-[200px] w-full mx-auto my-4'>
                    <img src='https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/07/bigstock-Portrait-Of-Fashion-Young-Woma-295881097.jpg' alt='logo_fashion' className='w-full h-full object-cover object-center'/>
                </div>
                <div className='border-b-2 border-gray-200'>
                     <h3 className='text-blue-600  text-sm font-light'> Bodycom Dress</h3>
                     <h3 className='text-sm font-light'>$19.00</h3>

                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4 relative'>
                    <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm mt-4'>Add to Cart</button>
                    <div className='flex items-center gap-3'>
                           <CiHeart className=' text-2xl'/>
                           <RiExchangeLine className=' text-2xl'/>
                    </div>
                </div>

            </div> */}

            </div>








        </div>
        </div>

    </section>
  )
}

export default FeatureProduct