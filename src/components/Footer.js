import React from 'react'

const Footer = () => {
  return (
   <section className='w-screen h-full bg-slate-100 overflow-hidden'>
    <div className='w-[90%] mx-auto grid md:grid-cols-4  grid-cols-1 px-4 pt-4 pb-8'>
        <div className='border-b-[1px]  md:border-b-0  md:border-r-[1px] border-gray-500 px-3 flex flex-col gap-4 '>
            <h3 className='kanit-regular'>About Us</h3>
            <div className='h-[1px] w-[14%] bg-orange-400'/>
            <h4 className='text-blue-600 kanit-light'>About Us</h4>
            <h4 className='text-blue-600 kanit-light'>Privacy Policies</h4>
            <h4 className='text-blue-600 kanit-light'>Terms & Condition</h4>
            <h4 className='text-blue-600 kanit-light'>Custom Link</h4>

        </div>
        <div className=' border-b-[1px]  md:border-b-0  md:border-r-[1px] border-gray-500 px-4 flex flex-col gap-4 md:pt-0 pt-4'>
        <h3 className='kanit-regular'>Contact Us</h3>
            <div className='h-[1px] w-[14%] bg-orange-400'/>
            <h4 className='text-blue-600 kanit-light'>About Us</h4>
            <h4 className='text-blue-600 kanit-light'>Privacy Policies</h4>
            <h4 className='text-blue-600 kanit-light'>Terms & Condition</h4>
            <h4 className='text-blue-600 kanit-light'>Custom Link</h4>
     
        </div>
        <div className=' border-b-[1px]  md:border-b-0   md:border-r-[1px] border-gray-500 px-4 flex flex-col gap-4 md:pt-0 pt-4'>
        <h3 className='kanit-regular'>My Account </h3>
            <div className='h-[1px] w-[14%] bg-orange-400'/>
            <h4 className='text-blue-600 kanit-light'>About Us</h4>
            <h4 className='text-blue-600 kanit-light'>Privacy Policies</h4>
            <h4 className='text-blue-600 kanit-light'>Terms & Condition</h4>
            <h4 className='text-blue-600 kanit-light'>Custom Link</h4>
        </div>
        <div className='  px-4 h-full flex gap-4 flex-col md:pt-0 pt-4 '>
        <h3 className='kanit-regular'>NewLetter </h3>
        <div className='h-[1px] w-[14%] bg-orange-400'/>
        <p className='kanit-normal text-gray-500'>Stay up to date with news and promotions by signing up for our newletter</p>
      <div className='border-[1px] border-gray-400  bg-white w-fit lg:w-full' >
        <input type='text' placeholder='Enter Email' className='outline-none border-none px-2 py-1 text-sm lg:w-[78%]'/>
        <button className='bg-blue-600 px-2 py-1'>
            Send
        </button>

      </div>
        </div>


    </div>

   </section>
  )
}

export default Footer