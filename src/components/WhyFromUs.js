import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { RiExchangeLine } from "react-icons/ri";





import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';





// breakpoints={{
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,  // Smaller space on small screens
//     },
//     640: {
//       slidesPerView: 1.5,  // Display 1.5 slides for medium screens (tablet)
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,  // Display 2 slides for larger tablets
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 3,  // Display 3 slides for desktop
//       spaceBetween: 40,
//     },
//   }}






const WhyFromUs = ({catogories,isTrue}) => {

    const [second,setSecond] = useState([]);
    const [categories,setcatogeries] = useState("women's clothing")



    useEffect(()=>{
  
        try {
            // https://fakestoreapi.com/products/category/women's%20clothing?limit=2
            // fetch('https://fakestoreapi.com/products?limit=5')
            // .then(res=>res.json())
            // .then((json)=>{
                
            //     console.log(json)
            // setproducts(json)

            fetch(`https://fakestoreapi.com/products/category/${categories}?limit=5`)
            .then(res=>res.json())
            .then((json)=>{
                console.log(json)
                 setSecond(json)
        }  
     )
        } catch (error) {
            
            console.log('error in why from us in upper section')
        }

    },[categories])


    if(!second) return
    
  return (

    <section className={`w-screen py-8 overflow-hidden ${catogories.bg  ?"bg-gray-200" : "mb-10"}  `}>
        <div className= 'md:w-[89%] w-[95%] lg:w-[80%] mx-auto '>
            <h2 className='  font-medium   text-center text-2xl kanit-semibold '>{catogories.heading}</h2>
            <div className='h-[1px] w-[40%] md:w-[10%] bg-orange-500 rounded-lg mx-auto mt-2 mb-3'/>
            <p className='text-center text-gray-600   kanit-light '>{catogories.para}
               {catogories.span && <span className='text-blue-600 underline'>Learn more</span>}
            </p>
            

            <div className='w-fit   flex justify-center mx-auto bg-gray-500 my-5'>
                {/* question the border is not collaping  */}
            <button className={`${categories === "women's clothing"? "bg-blue-600":''} border-collapse border-r-[1px] border-black text-white md:px-5  px-1 lg:px-8 py-2 text-nowrap  w-full h-full kanit-regular `} onClick={()=>setcatogeries("women's clothing")}>women's clothing</button>
            <button className={` ${categories==="electronics" ? "bg-blue-600":''} md:border-r-[1px] border-collapse border-black text-white md:px-5 px-1 lg:px-8  py-2  w-full kanit-regular`} onClick={()=>setcatogeries("electronics")}>electronics</button>
            <button className={` ${categories==="jewelery" ? "bg-blue-600":""} hidden lg:block border-black border-collapse text-white   md:px-5 px-1 lg:px-8  py-2  w-full kanit-regular`} onClick={()=>setcatogeries("jewelery")}>jewelery</button>
         <button className={`  ${categories ==="men's clothing"? "bg-blue-600":""} hidden lg:block border-black border-collapse md:border-l-[1px] text-white md:px-5 px-1 lg:px-8  py-2 w-full  kanit-regular`} onClick={()=>setcatogeries("men's clothing")}>men's </button>

            </div>


             <div className={`flex itams-center justify-between h-[350px] lg:h-[350px] gap-4 swipper_first`}>
 
             


             <Swiper
      // install Swiper modules
      modules={[ Pagination,Autoplay]}
      spaceBetween={20}
    //   slidesPerView={5}
      loop={true}
    //   autoplay={{
    //     delay: isTrue ?1500:1900, // Delay between slides in milliseconds
    //     disableOnInteraction: false, // Keep autoplay even after interaction
    //   }}
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
          slidesPerView: 2.5,  // Display 1.5 slides for medium screens (tablet)
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,  // Display 2 slides for larger tablets
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,  // Display 3 slides for desktop
          spaceBetween: 40,
        },
      }}
    className={`h-full w-full swiper_first`}>

     {  isTrue &&( <>  
     
     
     {second.map((pro,index)=>{
        return(<SwiperSlide key={index} className='w-full h-full  rounded-lg overflow-hidden relative'>
                   <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
                               <div className='h-[200px] w-full mx-auto overflow-hidden'>
                               <img src={pro.image} alt='' className='w-full h-full object-contain object-center'/>
                               </div>
                               <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                                  <p className='text-gray-600 underline ' >
                                      Erickrson
                                  </p>
                                  <p className='text-gray-600'>
                                      Model 519
                                  </p>
                                  
      
                               </div>
                               <div className='border-b-2 border-gray-200 px-2'>
                                    <h3 className='text-black  text-sm font-light'>{pro.title.substring(0,13)}</h3>
                                    <h3 className='text-sm  text-gray-700 font-light'>${pro.price}</h3>
               
                               </div>
                               <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                                  <div className='flex items-center justify-center'>
                                      <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                      <div className='flex flex-col items-center justify-center gap-0'>
                                      
                                    
                                      </div>
                                      
                                  </div>
                                  <div className='flex items-center'>
                                  <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                                   <div className='flex items-center gap-0'>
                                          <CiHeart className=' text-2xl cursor-pointer'/>
                                          <RiExchangeLine className=' text-2xl cursor-pointer'/>
                                   </div>
                                  </div>
                                  
                               </div>
                               <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                                  <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>$</span>Buy now</h4>
                                  <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>?</span>Questions</h4>
                               </div>
               
                           </div>
              </SwiperSlide>

        )
     })
    }

     
     



        {/* <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
        <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
        <div className='h-[200px] w-full mx-auto '>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/>
                         </div>
                         <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2' >
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-0'>
                                    <CiHeart className=' text-2xl'/>
                                    <RiExchangeLine className=' text-2xl'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                            <h4 className='text-black text-xs'> <span className='text-green-900 mr-1'>$</span>Buy now</h4>
                            <h4 className='text-black text-xs'> <span className='text-green-900 mr-1'>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide> */}




        {/* <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
        <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
        <div className='h-[200px] w-full mx-auto '>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZUDX1gNlKpt7AyH4ZVggiI_c65GzI3IYzQ&s' alt='' className='w-full h-full object-cover object-center'/>
                         </div>
                         <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2'>
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-0'>
                                    <CiHeart className=' text-2xl'/>
                                    <RiExchangeLine className=' text-2xl'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                            <h4 className='text-black text-xs'> <span className='text-green-900 mr-1'>$</span>Buy now</h4>
                            <h4 className='text-black text-xs'> <span className='text-green-900 mr-1'>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide> */}





        {/* <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
             <div className='w-full h-full  bg-white  flex flex-col justify-between '> 
                         <div className='h-[200px] w-full mx-auto '>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLyZaojD9jHdcCRRYVE8ejXiZdHr6xG3LwA&s' alt='' className='w-full h-full object-cover object-center'/>
                         </div>
                         <div className='w-full py-1 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2'>
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress  c</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-3'>
                                    <CiHeart className=' text-2xl'/>
                                    <RiExchangeLine className=' text-2xl'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex justify-between'>
                            <h4 className='text-black text-xs'> <span className='text-green-900 mr-1'>$</span>Buy now</h4>
                            <h4 className='text-black text-xs'> <span className='text-green-900 mr-1'>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide>  */}

                       <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
                           <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
                          <div className='h-[200px] w-full mx-auto  overflow-hidden'>

                                   {/* this is blocker for images */}


                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLyZaojD9jHdcCRRYVE8ejXiZdHr6xG3LwA&s' alt='' className='w-full h-full object-fill object-center'/>

                         {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/> */}
                         </div>
                         <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2'>
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-0'>
                                    <CiHeart className=' text-2xl cursor-pointer'/>
                                    <RiExchangeLine className=' text-2xl cursor-pointer'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>$</span>Buy now</h4>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide>


        {/* <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
        <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
        <div className='h-[200px] w-full mx-auto '>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/>
                         </div>
                         <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2'>
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-0'>
                                    <CiHeart className=' text-2xl cursor-pointer'/>
                                    <RiExchangeLine className=' text-2xl cursor-pointer'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>$</span>Buy now</h4>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide> */}




        {/* <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
        <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
        <div className='h-[200px] w-full mx-auto '>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjS8ywMSOb3KUk39Ta5Ro3xb9yM6P8TLbdw&s' alt='' className='w-full h-full object-cover object-center'/>
                         </div>
                         <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2'>
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-0'>
                                    <CiHeart className=' text-2xl cursor-pointer'/>
                                    <RiExchangeLine className=' text-2xl cursor-pointer'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>$</span>Buy now</h4>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide> */}

{/* 
        <SwiperSlide className='w-full h-full  rounded-lg overflow-hidden relative'>
        <div className='w-full h-[90%]   bg-white flex flex-col justify-between '> 
        <div className='h-[200px] w-full mx-auto '>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/>
                         </div>
                         <div className='w-full py-2 text-xs bg-gray-400 flex justify-between items-center px-2'>
                            <p className='text-gray-600 underline ' >
                                Erickrson
                            </p>
                            <p className='text-gray-600'>
                                Model 519
                            </p>
                            

                         </div>
                         <div className='border-b-2 border-gray-200 px-2'>
                              <h3 className='text-black  text-sm font-light'> Bodycom Dress</h3>
                              <h3 className='text-sm  text-gray-700 font-light'>$19.00</h3>
         
                         </div>
                         <div className='flex justify-between items-center  pb-4 w-full relative py-3'>
                            <div className='flex items-center justify-center'>
                                <input type='text' value={1} readOnly className='w-[20px] text-center'/>
                                <div className='flex flex-col items-center justify-center gap-0'>
                                
                              
                                </div>
                                
                            </div>
                            <div className='flex items-center'>
                            <button className='bg-blue-600 text-white px-2 py-1 text-xs rounded-sm '>Add to Cart</button>
                             <div className='flex items-center gap-0'>
                                    <CiHeart className=' text-2xl cursor-pointer'/>
                                    <RiExchangeLine className=' text-2xl cursor-pointer'/>
                             </div>
                            </div>
                            
                         </div>
                         <div className='py-1 px-2 w-full bg-gray-600 flex rounded-b-lg justify-between'>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>$</span>Buy now</h4>
                            <h4 className='text-black text-xs cursor-pointer hover:text-white'> <span className='text-green-900 mr-1 '>?</span>Questions</h4>
                         </div>
         
                     </div>
        </SwiperSlide> */}
        </>
        )

        }









    {!isTrue && <> 
    
    {
        second.map((ele,index)=>{
            return(
                <SwiperSlide key={index} >
                <div className='w-full h-[90%] rounded-lg overflow-hidden relative'>
                              <img src={ele.image} alt='' className='w-full h-full object-contain object-center'/>
                              <h3 className='bg-black text-white rounded-sm font-bold  absolute bottom-3 px-3  left-[50%] translate-x-[-50%] text-center  kanit-thin  cursor-pointer'>{ele.title.substr(0,11)}</h3>
                          </div>
                  </SwiperSlide>
            )
        })
    }
    
     {/* <SwiperSlide>
      <div className='w-full h-[90%] rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjS8ywMSOb3KUk39Ta5Ro3xb9yM6P8TLbdw&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  w-full h-[90%] rounded-lg overflow-hidden relative '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-full h-[90%] rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZUDX1gNlKpt7AyH4ZVggiI_c65GzI3IYzQ&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className=' w-full h-[90%] rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLyZaojD9jHdcCRRYVE8ejXiZdHr6xG3LwA&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
        </SwiperSlide>
       
        <SwiperSlide>
        <div className='w-full h-[90%] rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjS8ywMSOb3KUk39Ta5Ro3xb9yM6P8TLbdw&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>
                </div>
        </SwiperSlide>

        <SwiperSlide>
      <div className='w-full h-[90%] rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjS8ywMSOb3KUk39Ta5Ro3xb9yM6P8TLbdw&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' w-full h-[90%] rounded-lg overflow-hidden relative '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-full h-[90%] rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZUDX1gNlKpt7AyH4ZVggiI_c65GzI3IYzQ&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
        </SwiperSlide> */}

        </>}


       
      
    </Swiper>
  







                
                {/* 
               
                

                 */}

            </div>

            {catogories.showMore && <div className='text-xl mt-6 ' >
                  <p className='text-center px-4 py-2  bg-blue-500 text-white w-fit mx-auto rounded-lg kanit-medium'>See All Products</p>
            </div>}


        </div>

    </section>


)
}

export default WhyFromUs