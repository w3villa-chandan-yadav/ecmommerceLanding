import './App.css';
import Blogs from './components/Blogs';
import FeatureProduct from './components/FeatureProduct';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeroSectoi from './components/HeroSectoi';
import HeroSp from './components/HeroSp';
import ShopByBrand from './components/ShopByBrand';
import WhyFromUs from './components/WhyFromUs';
import { TbTruckDelivery } from "react-icons/tb";
import { HiUserCircle } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";


import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaSkype } from "react-icons/fa6";
import { FaSquareGooglePlus } from "react-icons/fa6";
import Footer from './components/Footer';






const catogories={heading:"Why buy from us ?",
  semi1:"Top Catogories",
  semi2:"Electronics",
  semi3:"Beauty",
  semi4:"Fashion",
  para:"Journal has been the best selling and most loved Opencart theme since first launch in 2013.Tried and tested by over 20k people, Journal is the best Opencart theme framework on the market today.",
  bg:false,
  showMore:false,
  span:true
}


const catogories2={heading:"Feature Products",
  semi1:"FEATURED",
  semi2:"LATEST",
  semi3:"BESTSELLER",
  semi4:"SPECIAL",
  para:"Display any products as tab or accordions with optional grid or carousal mode. Custom products per row per module and per breakpoint. Each module can display products in either grid or list view  with different styles per module.",
  bg:true,
  showMore:true,
  span:false
}

function App() {

  return (
    <>
    <Header/>
    <HeroSectoi/>
    <HeroSp/>
    <WhyFromUs catogories={catogories} />
    <WhyFromUs  catogories={catogories2} isTrue={true}/>
    <FeatureProduct/>
    <ShopByBrand/>
    <Gallery/>
    <Blogs/>

    <section className='w-screen h-full pt-4 pb-5 bg-gray-300 overflow-hidden'>
      <div className='w-[85%] mx-auto'>
        <h3 className='text-2xl kanit-semibold text-center '>What people say about us </h3>
        <div className='h-[2px] w-[10%] mx-auto bg-orange-500 rounded-lg my-4'/>
        <div className='w-full h-full md:h-[200px] grid grid-cols-1 md:grid-cols-2 lg:flex justify-between items-center gap-10 my-7'>
          <div className='hidden lg:block'>
          <h3 className='text-center w-fit mx-auto '><FaQuoteLeft className='text-4xl text-center text-orange-600'/></h3>
          <p className='kanit-regular leading-5 text-gray-700'> I've purchased hundresn and hundreds of files over the past 7 years.But there is nothing close 
            to this support and profeessionalism,NOt only is theme , simple , useful and modern,but again the support is remarkable. Very happy I got this theme! Thanks you!</p>
      <h3 className='kanit-semibold text-gray-800  text-center my-3'>-Charlibaltiore</h3>

      </div>




      <div className='hidden md:block '>
          <h3 className='text-center w-fit mx-auto'><FaQuoteLeft className='text-4xl text-center text-orange-600'/></h3>
          <p className='kanit-regular leading-5 text-gray-700'> I've purchased hundresn and hundreds of files over the past 7 years.But there is nothing close 
            to this support and profeessionalism,NOt only is theme , simple , useful and modern,but again the support is remarkable. Very happy I got this theme! Thanks you!</p>
      <h3 className='  kanit-semibold text-gray-800  font-bold  text-center my-3'>-Charlibaltiore</h3>

      </div>




      <div>
          <h3 className='text-center w-fit mx-auto'><FaQuoteLeft className='text-4xl text-center text-orange-600'/></h3>
          <p className='kanit-regular leading-5 text-gray-700'> I've purchased hundresn and hundreds of files over the past 7 years.But there is nothing close 
            to this support and profeessionalism,NOt only is theme , simple , useful and modern,but again the support is remarkable. Very happy I got this theme! Thanks you!</p>
      <h3 className=' kanit-semibold text-gray-800 text-center my-3'>-Charlibaltiore</h3>

      </div>

        </div>

      </div>

    </section>

      <section className='w-screen h-full pt-4 pb-5 bg-gray-600 overflow-hidden '>
        <div className='w-[85%] mx-auto my-5'><h3 className='text-white text-center md:text-left font-bold'>MOST VIEWED</h3>
        <div className='w-[6%] h-[2px] bg-orange-600 rounded-md mx-auto md:mx-0'/>
        </div>
        <div className='w-[85%] mx-auto  grid grid-cols-2 md:flex justify-between items-center gap-4 overflow-auto'>
          <div className='bg-white px-3 py-1 w-full flex justify-center items-center gap-4 rounded-lg'>
            <div className=' h-[60px]'>
          <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
            </div>
            <div>
            <div>
              <h4  className='text-xs'>Oversize sunglasse For...</h4>
              <p>$39.00</p>
            </div>
            <div className='flex items-center gap-2'>
            <TbTruckDelivery/>
             <HiUserCircle/>
             <FaRegHeart/>
            </div>
            </div>

          </div>
          <div className='bg-white w-full px-3 py-1 flex justify-center items-center gap-4 rounded-lg'>
            <div className='  h-[60px]'>
          <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
            </div>
            <div>
            <div>
              <h4  className='text-xs'>Oversize sunglasse For...</h4>
              <p>$39.00</p>
            </div>
            <div className='flex items-center gap-2'>
            <TbTruckDelivery/>
             <HiUserCircle/>
             <FaRegHeart/>
            </div>
            </div>

          </div>

          <div className='bg-white w-full px-3 py-1 flex justify-center items-center gap-4 rounded-lg' >
            <div className=' h-[60px]'>
          <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
            </div>
            <div>
            <div>
              <h4  className='text-xs'>Oversize sunglasse For...</h4>
              <p>$39.00</p>
            </div>
            <div className='flex items-center gap-2'>
            <TbTruckDelivery/>
             <HiUserCircle/>
             <FaRegHeart/>
            </div>
            </div>

          </div>

          <div className='bg-white w-full px-3 py-1  justify-center items-center gap-4 rounded-lg flex md:hidden lg:flex'>
            <div className=' h-[60px]'>
          <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
            </div>
            <div>
            <div>
              <h4  className='text-xs'>Oversize sunglasse For...</h4>
              <p>$39.00</p>
            </div>
            <div className='flex items-center gap-2'>
            <TbTruckDelivery/>
             <HiUserCircle/>
             <FaRegHeart/>
            </div>
            </div>

          </div>
          
        </div>


      </section>

    <section className='w-screen h-full bg-gray-300 overflow-hidden'>
      <div className='w-[60%] mx-auto flex justify-center items-center gap-4 py-5 text-4xl bg-gray-300 text-blue-500'>
          <FaFacebook/>
          <FaSquareTwitter/>
          <FaInstagramSquare/>
          <FaLinkedin/>
          <TfiYoutube/>
          <FaSkype/>
          <FaSquareGooglePlus/>
      </div>

    </section>


<Footer/>





    </>
  );
}

export default App;
