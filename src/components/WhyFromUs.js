import React from 'react'

const WhyFromUs = ({catogories}) => {

    
  return (

    <section className={`w-screen py-5 mb-5 overflow-hidden ${catogories.bg  ?"bg-gray-200" : ""}  `}>
        <div className='w-[80%] mx-auto '>
            <h2 className='text-3xl  font-medium lg:font-extrabold  text-center'>{catogories.heading}</h2>
            <div className='h-1 w-[40%] md:w-[10%] bg-orange-500 rounded-lg mx-auto my-3'/>
            <p className='text-center text-gray-600 text-sm lg:text-xl '>{catogories.para}
               {catogories.span && <span className='text-blue-600 underline'>Learn more</span>}
            </p>
            

            <div className='w-fit   flex justify-center mx-auto bg-gray-500 my-5'>
                {/* question the border is not collaping  */}
            <button className='bg-blue-600 border-collapse text-white md:px-5  px-1 lg:px-8 py-2 text-nowrap  w-full h-full '>{catogories.semi1}</button>
            <button className='border-[1.5px] border-collapse border-black text-black md:px-5 px-1 lg:px-8  py-2  w-full'>{catogories.semi2}</button>
            <button className=' hidden lg:block border-black border-collapse border-[1.5px] text-black md:px-5 px-1 lg:px-8  py-2  w-full'>{catogories.semi3}</button>
         <button className=' hidden lg:block border-black border-collapse border-[1.5px] text-black md:px-5 px-1 lg:px-8  py-2 w-full '>{catogories.semi4}</button>

            </div>


            <div className='flex itams-center justify-between h-[200px] lg:h-[300px] gap-4 '>
                <div className='w-full h-full rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjS8ywMSOb3KUk39Ta5Ro3xb9yM6P8TLbdw&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>
                </div>
                <div className='hidden lg:block w-full h-full rounded-lg overflow-hidden relative '>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
                <div className='hidden lg:block w-full h-full rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRddZ2tmRzkNvG4U3Z18nxuP9-6UFdNJcyg&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>
                <div className='w-full h-full rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZUDX1gNlKpt7AyH4ZVggiI_c65GzI3IYzQ&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>

                <div className='hidden lg:block w-full h-full rounded-lg overflow-hidden relative'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLyZaojD9jHdcCRRYVE8ejXiZdHr6xG3LwA&s' alt='' className='w-full h-full object-cover object-center'/>
                    <h3 className='bg-white rounded-sm text-black  absolute bottom-3 px-3  left-[50%] translate-x-[-50%]'>FASHION</h3>

                </div>

            </div>

            {catogories.showMore && <div className='text-xl mt-4  ' >
                  <p className='text-center px-4 py-2 bg-blue-500 w-fit mx-auto rounded-lg'>See All Products</p>
            </div>}


        </div>

    </section>


)
}

export default WhyFromUs