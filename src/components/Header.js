import React, { useEffect, useState } from 'react';
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
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoReorderFourOutline } from "react-icons/io5";
import { TbPhoneRinging } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from 'react-router-dom';

















const Header = () => {

 const [isLogin,setIsLogin] = useState(null)

    useEffect(()=>{
        const isLoginnn = sessionStorage.getItem("isLogin") ? JSON.parse(sessionStorage.getItem("isLogin")) : null ;
        console.log("this is the islogin" + isLoginnn)
        setIsLogin(isLoginnn);
    },[])

  return (
    <section className='w-screen h-full overflow-hidden '>
        <div className='flex justify-between items-center  w-[85%] mx-auto text-sm'>
            <div className='hidden items-center  gap-1 flex-[2/3] lg:flex md:flex md:gap-2 lg:gap-4 '>
                <div className='flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
                    <GrHome className='font-bold'/> 
                    <p>Home</p>
                </div>
                <div className='flex items-center gap-1 text-xs lg:text-sm text-wrap md:gap-1 hover:text-orange-600 cursor-pointer'>
                    <MdOutlineStars/>
                    <p className='text-nowrap'>About Us</p>
                </div>
                <div className='flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
                    <CiMail/>
                    <p className='text-nowrap'>Contact Us</p>
                </div>
                <div className='flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
                    <HiOutlineQuestionMarkCircle/>
                    <p className='text-nowrap'>FAQ</p>
                    <FaCaretDown/>
                </div>
            </div>


            <div className='flex items-center gap-1 md:gap-2 lg:gap-4 '>
            <div className='flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
            <GiUsaFlag/>
                <p>English</p>
                <FaCaretDown/>  
            </div>
            <div className='flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
            <span>$</span>
                <p>US Dollar</p>
                <FaCaretDown/>
            </div>

            </div>



            <div className='flex items-center gap-1 md:gap-2 lg:gap-4'>
            <div className='flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
            <GiHamburgerMenu/>
                <p>More menu</p>
                <FaCaretDown/>
            </div>
                
            <div className= 'hidden  md:flex items-center gap-1 text-xs lg:text-sm md:gap-1 hover:text-orange-600 cursor-pointer'>
                
                <TbTruckDelivery/>
                <p>Delivery</p>
                <FaCaretDown/>
                
            </div>
            </div>

        </div>






        <div className='flex justify-between items-center  w-screen bg-gray-200 mx-auto text-sm py-5 '>
        <div className='flex justify-between items-center  w-[85%] mx-auto  gap-10 '>
               <div className="w-[20%] md:w-[13%] lg:w-[15%] flex items-center  h-[27px] md:h-[34px] lg:h-[40px]">
                  <img src={image} alt='main_image' className='w-full h-full'/>
               </div>

               <div className='hidden lg:flex items-center justify-start h-[40px] flex-1'>
               <button className='bg-blue-800 px-3 flex items-center h-full font-bold rounded-l-md  text-white'>
                    ALL
                    <FaCaretDown className='text-white'/>
                </button>
                     <input type='text' placeholder='Search for products, brands and more' className='border-none p-2 w-full h-full outline-none'/>
                     <button className='bg-blue-800 px-5 flex  text-2xl items-center h-full font-bold rounded-r-md'>
                    <FaSearch className=' text-white'/>
                </button>
               </div>

               <div className='hidden md:flex items-center flex-[0.4] gap-3'>
                <div className='flex items-center flex-col justify-between cursor-pointer '>
                    <HiUserCircle className='text-xl font-semibold text-gray-800'/>
                     <p className='text-xs font-semibold'> Login</p>
                </div>

                <div className='flex items-center flex-col justify-center cursor-pointer '>
                    <PiNotePencilFill className='text-xl font-semibold text-gray-800'/>
                    <p  className='text-xs font-semibold text-gray-800'>Register</p>
                </div>

                <div className='flex items-center flex-col justify-between  cursor-pointer'>
                    <FaRegHeart className='text-xl font-semibold text-gray-800'/>
                    <p  className='text-xs font-semibold text-gray-800'>Wishlist</p>
                </div>

                <div className='flex items-center flex-col justify-between cursor-pointer'>
                    <PiShoppingCartSimpleFill className='text-xl font-semibold text-gray-800'/>
                    <p  className='text-xs font-semibold text-gray-800' >Compare</p>
                </div>




               </div>

               

               <div className='flex items-center justify-end h-[40px] '>
               <div className=' lg:hidden flex items-center gap-3 mr-2 '>
                <GiHamburgerMenu className='text-3xl md:hidden text-gray-800'/>
                <FaSearch className='text-3xl text-gray-800'/>

               </div>

               {
                isLogin ? <>
                <p className='text-[10px] md:text-sm'>0 item(s)-$0.00</p>
                <PiShoppingCartSimpleFill className='rounded-sm ml-1 text-xl md:text-3xl bg-blue-600 text-white'/>
                
                </> :<Link to={"/login"}> <button className='px-2 py-1 md:px-3 md:py-2 lg:px-4 bg-blue-600 rounded-md text-white kanit-regular '>
                    Login
                </button>
                </Link>
               }

               </div>
               


            </div>  
          </div>

          <div className='w-screen bg-blue-800 '>
            <div className="w-[85%] mx-auto flex justify-between items-center  ">
                <div className='flex items-center gap-2 h-[40px]'>
                    <div className='h-full bg-yellow-500 text-black relative flex items-center px-2 lg:px-4 text-sm text-nowrap cursor-pointer  '>
                      <IoReorderFourOutline className='hidden md:visible text-2xl lg:text-3xl font-bolder'/>
                      ALL DEPARTMENTS

                      <div className='absolute -top-2 right-0 bg-red-500 text-white px-1 rounded-sm text-[10px] z-10 cursor-pointer'>
                        SALE
                      </div>
                    </div>

                    <div className=' hidden  lg:flex items-center gap-3 text-white text-sm relative'> 
                     <h3 className='cursor-pointer'>MULTIVITAM</h3>
                     <h3 className='cursor-pointer'>MEGA MENU</h3>
                     <h3 className='cursor-pointer'>FULLWIDTH</h3>

                     <div className='absolute -top-5  right-[50%] bg-yellow-300 text-black px-1 rounded-sm text-[10px] cursor-pointer'>
                        SALE
                      </div>




                    </div>

                </div>
                <div className='flex items-center gap-1 md:gap-2 lg:gap-4 h-[40px]'>
                    <div className=' hidden md:flex items-center gap-0 md:gap-1 lg:gap-2 text-xs text-white cursor-pointer two'>
                         <TbPhoneRinging/>
                         +91-123-456-7890
                    </div>

                    <div className=' pt-2 h-full md:hidden items-center bg-yellow-500 text-black px-1 md:px-2 lg:px-4 gap-1 md:gap-2 lg:gap-3 cursor-pointer '>
                  <GiHamburgerMenu className='text-2xl '/>
                 </div>

                    <div className='hidden  h-full md:flex items-center bg-yellow-500 text-black px-1 md:px-2 lg:px-4 gap-1 md:gap-2 lg:gap-3 cursor-pointer one '>
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