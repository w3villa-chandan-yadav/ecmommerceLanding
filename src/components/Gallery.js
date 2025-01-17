import React from 'react'

const Gallery = () => {
  return (
<section className='w-screen h-full bg-gray-600'>
    <div className='w-[85%] mx-auto py-10 '>

        <h3 className='text-center text-3xl font-bold'>Improved Gallery Module </h3>
        <div className='h-[2px] w-[10%] mx-auto bg-orange-500 rounded-lg my-4'/>

        <p className='w-[90%] text-sm text-center text-gray-400 mx-auto'>The Gallery module supports images, videos and can acts as banner that can point to any other page or open other Popup modules.
            Create different modules with images, videos, banners or a combination of all. Add the modules on any page in the grid formate.
        </p>

        <div className='grid grid-cols-7 gap-3 mt-5'>
                <div className='border-[1px] border-gray-600 h-[150px] w-[150px] '>
                    <img src='https://plus.unsplash.com/premium_photo-1681494700976-861938fe0513?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0JTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600  h-[150px] w-[150px] '>
                    <img src='https://burst.shopifycdn.com/photos/fashion-model-in-pink.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600  h-[150px] w-[150px] '>
                    <img src='https://fashiondriftmagazine.co.in/wp-content/uploads/2024/08/Harishma-9-1.png' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600  h-[150px] w-[150px] '>
                    <img src='https://plus.unsplash.com/premium_photo-1689371952452-c88c72464115?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600  h-[150px] w-[150px] '>
                    <img src='https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600  h-[150px] w-[150px] '>
                    <img src='https://infifashion.com/wp-content/uploads/2021/12/puffed-sleeves-1.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600  h-[150px] w-[150px] '>
                    <img src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?cs=srgb&dl=pexels-athena-2043590.jpg&fm=jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                
                

            </div>


    </div>


</section>

)
}

export default Gallery