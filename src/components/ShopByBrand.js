import React from 'react'

const ShopByBrand = () => {
  return (
    <section className='w-screen h-full'>
        <div className='w-[85%] mx-auto py-10'>
            <h3 className='text-center text-3xl font-bold'>Shop by Brand</h3>
            <div className='w-[10%] h-1 mx-auto bg-orange-500 rounded-lg mt-2'/>
            <div className='grid grid-cols-7 gap-3 mt-5'>
                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq5Csbhxy7z8SV1AEZkf038Wp7-C3aNcqeA&s' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://chilloutbegusarai.in/image/cache/catalog/journal3/brands/awesome-200x200.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://bellesofbeauty.com/image/cache/catalog/journal3/brands/mellisa-600x315w.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://wallpapercat.com/w/full/4/4/4/2147266-1920x1080-desktop-1080p-htc-logo-background-image.jpg' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62ChstFudVi6093NAWexrHD7j88tNDDXkaQ&s' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://i.pinimg.com/originals/e4/36/e8/e436e8d5381b8ffe5773d8b8b871b0e6.gif' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>

                <div className='border-[1px] border-gray-600 p-2 h-[150px] w-[150px] '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62ChstFudVi6093NAWexrHD7j88tNDDXkaQ&s' alt='brand-1' className='w-full h-full object-center object-cover'/>
                </div>
                
                

            </div>

        </div>

    </section>
  )
}

export default ShopByBrand