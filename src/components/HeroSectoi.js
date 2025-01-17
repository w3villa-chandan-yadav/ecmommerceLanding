import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";


const HeroSectoi = () => {
  return (

    <section className='w-screen h-full py-5 overflow-hidden'>
        <div className='w-[85%] mx-auto flex justify-center items-center gap-5 h-[400px] '>
            <div className='flex-1 rounded-md overflow-hidden relative h-full'>
               <img src='https://budli.in/blog/wp-content/uploads/2021/07/6-What-You-Should-Do-Before-You-Sell-Your-Used-Laptop.jpg' alt='main_ingae' className='w-full h-full object-cover object-center'/>
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
               </div>
            </div>

            <did className='flex justify-between items-center gap-5 flex-col flex-[0.4]'>
                <div className=' w-full h-[190px]  relative'>
                <img src='https://www.shutterstock.com/image-photo/beautiful-luxury-mens-watch-stylish-260nw-2511178433.jpg' alt='main_ingae' className='w-full h-full object-cover object-center'/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-3'>
                <button className=' text-blue-500 px-3 py-1 rounded-md text-xs'> 
                    WEARABLE
                </button>
                <h3 className='text-lg font-extrabold '>
                    Best Mobile options <br/>at any resolution
                </h3>
               
               </div>
                </div>
                <div className='bg-red-300 w-full h-[190px] relative'>
                <img src='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/04/choose-right-monitor-photo-editing-5.jpg?fit=1500%2C988&ssl=1' alt='main_ingae' className='w-full h-full object-cover object-center'/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-3'>
                <button className=' text-blue-500 px-3 py-1 rounded-md text-xs'> 
                    COMPUTER
                </button>
                <h3 className='text-lg font-extrabold text-white '>
                    Best Mobile options <br/>at any resolution
                </h3>
               
               </div>

                </div>

            </did>

        </div>
         
    </section>


  )
}

export default HeroSectoi