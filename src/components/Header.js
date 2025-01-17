import React from 'react';
import { GrHome } from "react-icons/gr";
import { MdOutlineStars } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GiUsaFlag } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import image from "../Assets/Nature_journal_logo.svg.png"
import { FaSearch } from "react-icons/fa";

import { HiUserCircle } from "react-icons/hi2";
import { PiNotePencilFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineChangeCircle } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoReorderFourOutline } from "react-icons/io5";
import { TbPhoneRinging } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";

















const Header = () => {
  return (
    <section className='w-screen h-full overflow-hidden '>
        <div className='flex justify-between items-center  w-[85%] mx-auto text-sm'>
            <div className='flex items-center  gap-4 flex-[2/3]'>
                <div className='flex items-center gap-2 hover:text-orange-600 cursor-pointer'>
                    <GrHome className='font-bold'/> 
                    <p>Home</p>
                </div>
                <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer'>
                    <MdOutlineStars/>
                    <p>About Us</p>
                </div>
                <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer'>
                    <CiMail/>
                    <p>Contact Us</p>
                </div>
                <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer'>
                    <HiOutlineQuestionMarkCircle/>
                    <p>FAQ</p>
                    <FaCaretDown/>
                </div>
            </div>


            <div className='flex items-center gap-4 '>
            <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer'>
                <GiUsaFlag/>
                <p>English</p>
                <FaCaretDown/>  
            </div>
            <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer'>
                <span>$</span>
                <p>US Dollar</p>
                <FaCaretDown/>
            </div>

            </div>



            <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer'>
            <GiHamburgerMenu/>
                <p>More menu</p>
                <FaCaretDown/>
            </div>
                
            <div className='flex items-center gap-1 hover:text-orange-600 cursor-pointer' >
                
                <TbTruckDelivery/>
                <p>Delivery</p>
                <FaCaretDown/>
                
            </div>
            </div>

        </div>






        <div className='flex justify-between items-center  w-screen bg-gray-200 mx-auto text-sm py-4 '>
        <div className='flex justify-between items-center  w-[85%] mx-auto  gap-10'>
               <div className="w-[15%] h-[40px]">
                  <img src={image} alt='main_image' className='w-full h-full'/>
               </div>

               <div className='flex items-center justify-start h-[40px] flex-1'>
               <button className='bg-blue-800 px-3 flex items-center h-full font-bold rounded-l-md'>
                    ALL
                    <FaCaretDown/>
                </button>
                     <input type='text' placeholder='Search for products, brands and more' className='border-none p-2 w-full h-full outline-none'/>
                     <button className='bg-blue-800 px-5 flex  text-3xl items-center h-full font-bold rounded-r-md'>
                    <FaSearch/>
                </button>
               </div>

               <div className='flex items-center flex-[0.4] gap-3'>
                <div className='flex items-center flex-col justify-between '>
                    <HiUserCircle className='text-xl font-semibold'/>
                     <p className='text-xs font-semibold'> Login</p>
                </div>

                <div className='flex items-center flex-col justify-between '>
                    <PiNotePencilFill className='text-xl font-semibold'/>
                    <p  className='text-xs font-semibold'>Register</p>
                </div>

                <div className='flex items-center flex-col justify-between '>
                    <FaRegHeart className='text-xl font-semibold'/>
                    <p  className='text-xs font-semibold'>Wishlist</p>
                </div>

                <div className='flex items-center flex-col justify-between '>
                    <PiShoppingCartSimpleFill className='text-xl font-semibold'/>
                    <p  className='text-xs font-semibold'>Compare</p>
                </div>




               </div>

               <div className='flex items-center justify-end h-[40px] '>
                <p>0 item(s)-$0.00</p>
                <PiShoppingCartSimpleFill className='text-blue-800 text-3xl'/>

               </div>
               


            </div>  
          </div>

          <div className='w-screen bg-blue-800'>
            <div className="w-[85%] mx-auto flex justify-between items-center ">
                <div className='flex items-center gap-4 h-[40px]'>
                    <div className='h-full bg-yellow-500 text-black relative flex items-center px-4 text-sm '>
                      <IoReorderFourOutline className='text-3xl font-bolder'/>
                      ALL DEPARTMENTS

                      <div className='absolute -top-2 right-0 bg-red-500 text-white px-1 rounded-sm text-[10px]'>
                        SALE
                      </div>
                    </div>

                    <div className='flex items-center gap-3 text-white text-sm relative'> 
                     <h3>MULTIVITAM</h3>
                     <h3>MEGA MENU</h3>
                     <h3>FULLWIDTH</h3>

                     <div className='absolute -top-4  right-[50%] bg-yellow-300 text-black px-1 rounded-sm text-[10px]'>
                        SALE
                      </div>




                    </div>

                </div>
                <div className='flex items-center gap-4 h-[40px]'>
                    <div className='flex items-center gap-2 text-white '>
                         <TbPhoneRinging/>
                         +91-123-456-7890
                    </div>
                    <div className='h-full flex items-center bg-yellow-500 text-black px-4 gap-3'>
                        <MdOutlineMessage className='text-2xl '/>
                          <p className='text-xs'>BLOG</p>
                    </div>

                </div>

            </div>

          </div>

    </section>
  )
}

export default Header