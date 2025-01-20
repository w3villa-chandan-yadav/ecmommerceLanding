import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Carousel from './Carousal';

const items=[
    {
       image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        heading:"Enjoy the amazing view of the sky",
    },
    {
        image:"    https://budli.in/blog/wp-content/uploads/2021/07/6-What-You-Should-Do-Before-You-Sell-Your-Used-Laptop.jpg",
         heading:"Best Mobile options at any resolution",
     },

    {
        image:"https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-various-makeup-products-lie-on-a-table-on-dark-image_2908578.jpg",
        heading:"Buy the best makeup products",
    },
    {
        image:"https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
        heading:"Try best clothing options in the market"
    },
    {
        image:"https://www.canfieldsci.com/common/images/products/23/title/product-title.jpg",
        heading:"Best camera option at minimum price"
    }
]



const HeroSectoi = () => {
  return (

    <section className='w-screen h-full py-5 overflow-hidden'>
        <div className='w-[85%] mx-auto flex justify-center items-center gap-1 md:gap-5 lg:h-[400px] md:h-[330px] h-[260px] flex-col md:flex-row '>
            <div className='flex-1 rounded-md overflow-hidden relative h-[200px]  md:h-full w-full'>
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


            <Carousel items={items}/>


            </div>

            <div className='flex justify-between items-center lg:gap-5 md:gap-3 gap-1 flex-row md:flex-col flex-1 h-full md:flex-[0.4]'>
                <div className=' w-full h-full md:h-[47%] overflow-hidden relative'>
                <img src='https://www.shutterstock.com/image-photo/beautiful-luxury-mens-watch-stylish-260nw-2511178433.jpg' alt='main_ingae' className='w-full h-full object-cover object-center'/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-3'>
                <button className=' text-blue-500 px-3 py-1 rounded-md text-xs'> 
                    WEARABLE
                </button>
                <h3 className='md:text-lg text-xs font-extrabold '>
                    Best Mobile options <br/>at any resolution
                </h3>
               
               </div>
                </div>
                <div className='bg-red-300 w-full h-full md:h-[47%] overflow-hidden relative'>
                <img src='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/04/choose-right-monitor-photo-editing-5.jpg?fit=1500%2C988&ssl=1' alt='main_ingae' className='w-full h-full object-cover object-center'/>
               <div className=' absolute left-[5%] top-[50%] translate-y-[-50%]  flex flex-col justify-between items-start gap-3'>
                <button className=' text-blue-500 px-3 py-1 rounded-md text-xs'> 
                    COMPUTER
                </button>
                <h3 className='md:text-lg text-xs text-black font-extrabold md:text-white '>
                    Best Mobile options <br/>at any resolution
                </h3>
               
               </div>

                </div>

            </div>

        </div>
         
    </section>


  )
}

export default HeroSectoi