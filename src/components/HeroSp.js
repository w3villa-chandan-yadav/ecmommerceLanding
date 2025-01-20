import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { IoArrowUndoSharp } from "react-icons/io5";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { RiBox3Line } from "react-icons/ri";


const HeroSp = () => {
  return (
    <section className='w-screen py-5 bg-blue-950 overflow-hidden'>
        <div className='w-[80%] mx-auto grid grid-cols-2 lg:flex justify-between items-center gap-2 lg:gap-0'>
            <div className='flex items-center gap-2'>
                <div className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full flex justify-center items-center border-2  border-blue-500 '>
                    <CiDeliveryTruck className='text-orange-500 text-sm  lg:text-2xl'/>
                </div>
                <div className='text-white'>
                        <h3 className='font-light text-xs lg:font-semibold'>Free Shipping</h3>
                        <h5 className='text-xs text-gray-400 '>Free delivery over $100</h5>
                    </div> 

            </div>
            <div className='flex items-center gap-2'>
                <div className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full flex justify-center items-center border-2  border-blue-500 '>
                    <IoArrowUndoSharp className='text-orange-500 text-sm  lg:text-2xl'/>
                </div>
                <div className='text-white'>
                        <h3 className='font-light text-xs lg:font-semibold'>Free Return</h3>
                        <h5 className='text-xs text-gray-400'>Hassel free returns</h5>
                    </div> 

            </div>
            <div className='flex items-center gap-2'>
                <div className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]  rounded-full flex justify-center items-center border-2  border-blue-500 '>
                    <RiPoliceBadgeFill className='text-orange-500 text-sm  lg:text-2xl'/>
                </div>
                <div className='text-white'>
                        <h3 className='font-light text-xs lg:font-semibold'>Secure Shopping</h3>
                        <h5 className='text-xs text-gray-500'>Best securty feature</h5>
                    </div> 

            </div>
            <div className='flex items-center gap-2'>
                <div className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full flex justify-center items-center border-2  border-blue-500 '>
                    <RiBox3Line className='text-orange-500 text-sm  lg:text-2xl'/>
                </div>
                <div className='text-white'>
                        <h3 className='font-light text-xs lg:font-semibold'>Unlimited Blocks</h3>
                        <h5 className='text-xs text-gray-500'>Any content, any page</h5>
                    </div> 

            </div>

        </div>

    </section>

  )
}

export default HeroSp