import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Carousel from './Carousal';
import image1 from '../Assets/image1.png'
import TestiMonials from './Carousal/Cards';





const HeroSectoi = () => {

    const [products,setproducts] = useState([])

    useEffect(()=>{
        
        console.log("here i am")

        try {
            
            fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then((json)=>{
                
                console.log(json)
            setproducts(json)
        }
        )
        

        } catch (error) {
            console.log("error in the Hereosections")
        }

    },[])

    if(products.length ===0){
        return(
            <div>
                Loading
            </div>
        )
    }


  return (

    <section className='w-screen h-full py-5 overflow-hidden'>
        <div className='w-[90%] mx-auto flex justify-center items-center gap-1 md:gap-5 lg:h-[400px] md:h-[330px] h-[360px] flex-col md:flex-row '>
            <div className='flex-1 rounded-md overflow-hidden relative h-[200px] bg-gray-300 md:h-full w-full'>
               {/* <img src='https://budli.in/blog/wp-content/uploads/2021/07/6-What-You-Should-Do-Before-You-Sell-Your-Used-Laptop.jpg' alt='main_ingae' className='w-full h-full object-cover object-center'/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-7'>
                <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-xs'> 
                    Mobile
                </button>
                <h3 className='text-4xl  font-extrabold font-sans '>
                    Best Mobile options <br/>at any resolution
                </h3>
                <button className='flex items-center gap-1 border-[1px] border-black rounded-md px-3 py-1' >
                    Learn More <IoIosArrowRoundForward className='text-3xl'/>
                </button>
               </div> */}


            {/* <Carousel items={items}/> */}
            <TestiMonials products={products}/>


            </div>

            <div className='flex justify-between items-center lg:gap-2   md:gap-3 gap-1 flex-row md:flex-col flex-[0.5] h-full md:flex-[0.4]'>
                <div className=' w-full h-full md:h-[48%] overflow-hidden relative rounded-md bg-gray-300'>
                <img src='https://www.shutterstock.com/image-photo/beautiful-luxury-mens-watch-stylish-260nw-2511178433.jpg' alt='main_ingae' className='w-full h-full object-cover object-right scale-150 '/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-3'>
                <button className=' text-blue-500 px-3 py-1 rounded-md text-xs'> 
                    WEARABLE
                </button>
                <h3 className='md:text-lg text-xs font-extrabold kanit-bold  '>
                    Best Mobile options <br/>at any resolution
                </h3>
               
               </div>
                </div>
                <div className='w-full h-full md:h-[48%] overflow-hidden relative rounded-md bg-gray-300'>
                <img src='https://emc2rrspvpp.exactdn.com/wp-content/uploads/2023/09/23Q4_NAM_WEB_11.17_CPC_Right_Product_1920x650px-LP-banner.jpg?lossy=1&quality=92&webp=92&ssl=1' alt='main_ingae' className='w-full h-full object-cover object-center'/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-3'>
                <button className=' text-blue-500 px-3 py-1 rounded-md text-xs'> 
                    STYLE
                </button>
                <h3 className='md:text-lg text-xs font-extrabold text-white kanit-bold '>
                    Best makeup options <br/>at minimum price
                </h3>
               
               </div>

                </div>

            </div>

        </div>
         
    </section>


  )
}

export default HeroSectoi